document.addEventListener("DOMContentLoaded", function() {
    const contentElement = document.getElementById("content");
    
    const contentData = {
        welcome: `
            <h1>Welcome to @certified.dave</h1>
            <p>what is the point of this website, i dont know, please enjoy this highly comedic image.</p>
            <img src="msimages/sillycat.jpg" style="width:50%; height:auto;">
            <p>i hope you enjoyed that image, the sidebar will show you stuff that i put in it, and the topbar will take you to different pages</p>
        `,
        charts: `
            <h1>Charts</h1>
            <div class="grid">
                <div class="grid-item">
                    <img src="charts/cimages/danubianmilitia.png" style="width:30%; height:auto;">
                    <a href="charts/militia.html">Federal People's Militia of Danubia</a>
                </div>
                <div class="grid-item">
                    <img src="charts/cimages/hkpf.png" style="width:30%; height:auto;">
                    <a href="charts/hkpf.html">Hong Kong Police Force</a>
                </div>
                <div class="grid-item">
                    <img src="charts/cimages/rgr.png" style="width:30%; height:auto;">
                    <a href="charts/rgr.html">Royal Gurkha Rifles</a>
                </div>
                <div class="grid-item">
                    <img src="charts/cimages/tokyopolice.png" style="width:30%; height:auto;">
                    <a href="charts/tmpd.html">Tokyo Metropolitan Police</a>
                </div>
            </div>
            <br>
            <div class="grid">
                <div class="grid-item">
                    <img src="charts/cimages/placeholder.png" style="width:30%; height:auto;">
                    <a href="#">Placeholder</a>
                </div>
                <div class="grid-item">
                    <img src="charts/cimages/placeholder.png" style="width:30%; height:auto;">
                    <a href="#">Placeholder</a>
                </div>
                <div class="grid-item">
                    <img src="charts/cimages/placeholder.png" style="width:30%; height:auto;">
                    <a href="#">Placeholder</a>
                </div>
                <div class="grid-item">
                    <img src="charts/cimages/placeholder.png" style="width:30%; height:auto;">
                    <a href="#">Placeholder</a>
                </div>
            </div>
        `,
        dave: `
            <h1>Daveids</h1>
            <p>just go to the resume <a href="https://trello.com/b/1bx5MVyk/daveids-resume" target="_blank"> here</a>
            <br>
            <br>
            <img src="msimages/davecrucify.png" style="width:50%; height:auto"></p>
        `,
        blog: `
            <h1>Blog</h1>
            <p>ur mad if u think im writing a blog heh</p>
        `
    };

    document.querySelectorAll(".sidebar ul li a").forEach(function(link) {
        link.addEventListener("click", function(event) {
            event.preventDefault();
            const contentKey = event.target.getAttribute("data-content");
            if (contentData[contentKey]) {
                contentElement.innerHTML = contentData[contentKey];
            }
        });
    });
});
