import { Application } from "https://deno.land/x/oak/mod.ts";

const app = new Application();

app.use((ctx) => {
  console.log('ctx=', ctx);
  console.log('ctx.request=', ctx.request);
  console.log('url=', ctx.request.url);

  const pathname = ctx.request.url.pathname;
  ctx.response.body=`
  <html>
  <body>
     <a href="http://127.0.0.1:8000/nqu/">金門大學</a><br></br>
     <a href="http://127.0.0.1:8000/nqu/csie/">金門大學資工系</a><br></br>
     <a href="http://127.0.0.1:8000/to/nqu/">轉到金門大學網站</a><br></br>
     <a href="http://127.0.0.1:8000/to/nqu/csie/">轉到金門大學資工系</a><br></br>
  </body>
  </html>`

  if (pathname === "/nqu/") {
    ctx.response.body = `
    <html>
    <body>
    <a href="https://www.nqu.edu.tw/">金門大學</a>
    </body>
    </html>`
} 
  else if (pathname === "/nqu/csie/") {
    
    ctx.response.body = ` 
    <html>
    <body>
       <a href="https://csie.nqu.edu.tw/">金門大學資工系</a>
    </body>
    </html>`
  } 
  else if (pathname === "/to/nqu/") {
    ctx.response.redirect("https://www.nqu.edu.tw/");
  } 
  else if (pathname === "/to/nqu/csie/") {
    ctx.response.redirect("https://csie.nqu.edu.tw/");
  } 
});

console.log('start at : http://127.0.0.1:8000')
await app.listen({ port: 8000 });