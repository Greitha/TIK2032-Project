// JavaScript untuk Home page (index.html)
if (document.URL.includes("index.html")) {
    console.log("This is the Home page.");
}

// JavaScript untuk Gallery page (gallery.html)
if (document.URL.includes("gallery.html")) {
    console.log("This is the Gallery page.");

    let currentIndex = 0;

    const handleImageClick = (event) => {
        const imageSrc = event.target.getAttribute("src");
        console.log("Image clicked:", imageSrc);
        displayModal(imageSrc, event.target.parentElement);
    };

    const displayModal = (imageSrc, parentDiv) => {
        const imagesInSection = Array.from(parentDiv.querySelectorAll("img"));
        currentIndex = imagesInSection.findIndex(img => img.getAttribute("src") === imageSrc);

        const modalContainer = document.createElement("div");
        modalContainer.classList.add("modal-container");

        const modalContent = document.createElement("div");
        modalContent.classList.add("modal-content");

        const modalImage = document.createElement("img");
        modalImage.setAttribute("src", imageSrc);
        modalImage.setAttribute("alt", "Clicked Image");

        const modalControls = document.createElement("div");
        modalControls.classList.add("modal-controls");
        const prevButton = document.createElement("button");
        prevButton.textContent = "Previous";
        prevButton.id = "prevButton";
        const nextButton = document.createElement("button");
        nextButton.textContent = "Next";
        nextButton.id = "nextButton";
        modalControls.appendChild(prevButton);
        modalControls.appendChild(nextButton);

        modalContent.appendChild(modalImage);
        modalContent.appendChild(modalControls);

        modalContainer.appendChild(modalContent);

        document.body.appendChild(modalContainer);

        modalContainer.addEventListener("click", (event) => {
            if (event.target === modalContainer) {
                modalContainer.remove();
            }
        });

        prevButton.addEventListener("click", () => {
            currentIndex = showPrevImage(imagesInSection, modalImage, currentIndex);
        });
        nextButton.addEventListener("click", () => {
            currentIndex = showNextImage(imagesInSection, modalImage, currentIndex);
        });

        modalContainer.classList.add("active");
    };

    const showPrevImage = (imagesInSection, modalImage, currentIndex) => {
        currentIndex = (currentIndex - 1 + imagesInSection.length) % imagesInSection.length;
        const prevImageSrc = imagesInSection[currentIndex].getAttribute("src");
        modalImage.setAttribute("src", prevImageSrc);
        return currentIndex;
    };

    const showNextImage = (imagesInSection, modalImage, currentIndex) => {
        currentIndex = (currentIndex + 1) % imagesInSection.length;
        const nextImageSrc = imagesInSection[currentIndex].getAttribute("src");
        modalImage.setAttribute("src", nextImageSrc);
        return currentIndex;
    };

    const images = document.querySelectorAll("img");
    images.forEach(image => {
        image.addEventListener("click", handleImageClick);
    });

    const moreButtons = document.querySelectorAll(".more-button");
    moreButtons.forEach(button => {
        button.addEventListener("click", () => {
            const section = button.parentElement;
            const hiddenImages = Array.from(section.querySelectorAll("img:nth-of-type(n+4)"));
            hiddenImages.forEach(img => {
                img.style.display = "block";
            });
            button.style.display = "none";
            const lessButton = document.createElement("button");
            lessButton.textContent = "Less";
            lessButton.classList.add("less-button");
            section.appendChild(lessButton);
            lessButton.addEventListener("click", () => {
                hiddenImages.forEach(img => {
                    img.style.display = "none";
                });
                lessButton.style.display = "none";
                button.style.display = "block";
            });
        });
    });
}

// JavaScript untuk Blog page (blog.html)
if (document.URL.includes("blog.html")) {
    console.log("This is the Blog page.");

    document.addEventListener("DOMContentLoaded", function() {
        const articles = document.querySelectorAll("article");

        const handleArticleClick = (event) => {
            const article = event.target.closest("article");
            const articleContent = article.querySelector(".article-content");
            if (articleContent) {
                const contentHTML = articleContent.innerHTML;
                const newWindow = window.open("", "_blank", "width=1000,height=1000");
                const imageSrc = article.querySelector(".image-wrapper img").getAttribute("src") || "path/to/default/image.jpghttps://scontent.fmdc6-1.fna.fbcdn.net/v/t39.30808-6/232865917_4736546029707491_6718421868996800598_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=5f2048&_nc_ohc=T9Pzzo-cXQoAb721zKc&_nc_ht=scontent.fmdc6-1.fna&oh=00_AfDvXOhWUrZ4mj66PYEGDNOY12TSm4ETcJ8s8m1E1sOUgA&oe=662BFE09";

                newWindow.document.write(`
                    <html>
                    <head>
                        <title>${article.querySelector("h3").textContent}</title>
                        <link rel="stylesheet" type="text/css" href="blog.css">
                        <style>
                            .new-window-article {
                                font-family: Arial, sans-serif;
                                padding: 20px;
                                background-color: #fff;
                                width: 100%;
                                max-width: 600px;
                                margin: 0 auto;
                                box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
                                border-radius: 5px;
                            }
                            .new-window-article h3 {
                                color: #333;
                                font-size: 24px;
                                margin-bottom: 20px;
                            }
                            .new-window-article img {
                                max-width: 100%;
                                height: auto;
                                margin-bottom: 20px;
                            }
                            .new-window-article p {
                                font-size: 18px;
                                line-height: 1.6;
                            }
                        </style>
                    </head>
                    <body>
                        <div class="new-window-article">
                            <img src="${imageSrc}" alt="Image Article"> <!-- Gunakan jalur gambar yang sesuai -->
                            <h3>${article.querySelector("h3").textContent}</h3>
                            ${contentHTML}
                        </div>
                    </body>
                    </html>
                `);
            } else {
                console.error("Article content not found.");
            }
        };

        articles.forEach(article => {
            const title = article.querySelector(".title-wrapper");
            title.addEventListener("click", handleArticleClick);
        });
    });
}

// JavaScript untuk Contact page (contact.html)
if (document.URL.includes("contact.html")) {
    console.log("This is the Contact page.");
    
    const whatsappLink = document.getElementById("whatsapp-link");
    whatsappLink.addEventListener("click", () => {
        console.log("WhatsApp icon clicked!");
    });
}
