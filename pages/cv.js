import React from "react";
import * as pdfjsLib from "pdfjs-dist/build/pdf";
import "pdfjs-dist/build/pdf.worker.entry";

class CV extends React.Component {
  constructor(props) {
    super(props);
    this.canvasRef = React.createRef();
    this.pdfRenderTask = null;
  }

  state = {
    renderingPdf: false
  };

  componentDidMount() {
    this.renderPdf();
  }

  componentDidUpdate() {
    this.renderPdf();
  }

  componentWillUnmount() {
    if (this.pdfRenderTask) {
      this.pdfRenderTask.cancel();
      this.pdfRenderTask = null;
    }
  }
  
  setCanvasSize = (viewport) => {
    const canvas = this.canvasRef.current;
    const context = canvas.getContext("2d");
    canvas.height = viewport.height;
    canvas.width = viewport.width;
  };

  renderPdf() {
    if (!this.state.renderingPdf) {
      this.setState({ renderingPdf: true }, () => {
        pdfjsLib.getDocument("/cv.pdf").promise.then((pdf) => {
          pdf.getPage(1).then((page) => {
            const viewport = page.getViewport({ scale: 1 });
            this.setCanvasSize(viewport);
            const renderContext = {
              canvasContext: this.canvasRef.current.getContext("2d"),
              viewport: viewport,
            };
  
            // Cancel any ongoing rendering operation before starting a new one
            if (this.pdfRenderTask) {
              this.pdfRenderTask.cancel();
            }
  
            this.pdfRenderTask = page.render(renderContext);
  
            this.pdfRenderTask.promise.then(() => {
              this.setState({ renderingPdf: false });
            }).catch((error) => console.log(error));
          });
        }).catch((error) => console.log(error));
      });
    }
  }

  render() {
    return (
      <div id="cv-container" className="h-screen flex justify-center items-center m-0 p-0">
        <div className="w-full h-full" style={{ position: "relative", overflow: "hidden" }}>
          <canvas ref={this.canvasRef} id="cv-canvas" className="absolute top-0 left-0 h-full w-auto" />
        </div>
      </div>
    );
  }
}

export default CV;
