const url = `
https://newsapi.org/v2/top-headlines?country=in&category=sports&apiKey=f9ea4c64dc6b4644a7a29a1efe48d3e7`;
const xhr = new XMLHttpRequest();
xhr.open("GET", url);
xhr.onreadystatechange = () => {
  if (xhr.readyState == 4 && xhr.status == 200) {
    const response = JSON.parse(xhr.responseText);
    console.log(response);
    let output = "";
    // for(let i=0; i < response.items.length; i++) {
    //     output += `
    //         <div style="width: 23%; margin: 10px;">
    //             <a href="https://www.youtube.com/watch?v=${response.items[i].id.videoId}" target="_blank">
    //                 <div>
    //                     // <img style="width:100%" src="${response.items[i].snippet.thumbnails.high.url}" />
    //                     // <h4>${response.items[i].snippet.title}</h4>
    //                     <p>${response.items[i].snippet.description}</p>
    //                 </div>
    //             </a>
    //         </div>
    //     `
    // }

    let o = "";
    response.articles.forEach((e) => {
      console.log(e.urlToImage);
      o += `
        <div style="width: 23%; margin: 10px;">
        <img src="${e.urlToImage}?${e.urlToImage}:"aa.JPG"  class="main-image"alt="Avatar" style="width:100%">
         <h5>${e.title}</h3>
         <p>${e.content}</p>
        <a href="${e.url}" target="_blank"><button type="button" class="btn btn-secondary">Tap to know more</button></a>
        </div>
        `;
    });
    document.getElementById("my-div").innerHTML = o;
  }
};
xhr.send();