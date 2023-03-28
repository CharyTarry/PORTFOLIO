import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html>
      <Head>
        <link
          href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;500&display=swap"
          rel="stylesheet"
        />
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/pdf.js/2.11.338/pdf.min.css"
          integrity="sha512-RD4fCmY0krMv4bwWgXJHd2Qep/l98cizwKhF/iW8SypD/wjZVnE4GkA4W8fkG6u1mxVU+o6U28M6xIn3q67Gg=="
          crossOrigin="anonymous"
        />
        <script
          src="https://cdnjs.cloudflare.com/ajax/libs/pdf.js/2.11.338/pdf.min.js"
          integrity="sha512-9MhPULpFt0Sl0zg5r5rLbH2J0tMCgj+c0oW9XyAY+JJ2HdOcW/8vKeJgZ+YpZtkHIT4W8XAJ1Nl7rkphFSc6zw=="
          crossOrigin="anonymous"
        ></script>
      </Head>
      <body className="font-poppins">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}