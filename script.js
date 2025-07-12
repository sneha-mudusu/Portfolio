
// Get modal elements
const modal = document.getElementById("resume-modal");
const img = document.getElementById("resume-image");
const modalImg = document.getElementById("zoomed-resume");
const closeBtn = document.querySelector(".close");

img.onclick = function () {
    modal.style.display = "block";
    modalImg.src = this.src;
};

closeBtn.onclick = function () {
modal.style.display = "none";
};

function toggleSidebar() {
  const sidebar = document.querySelector('.sidebar');
  sidebar.classList.toggle('open');
};


window.onclick = function (e) {
    if (e.target == modal) {
        modal.style.display = "none";
    }
};

function openModal(imgElement) {
    const modal = document.getElementById("project-modal");
    const modalImg = document.getElementById("zoomed-project-img");
    modal.style.display = "block";
    modalImg.src = imgElement.src;
}

function closeModal() {
document.getElementById("project-modal").style.display = "none";
}

// Optional: close modal by clicking outside the image
window.addEventListener("click", function (e) {
const modal = document.getElementById("project-modal");
if (e.target === modal) {
    modal.style.display = "none";
}
});

document.addEventListener("DOMContentLoaded", () => {
  const modal = document.getElementById("project-modal");
  const modalImg = document.getElementById("zoomed-project-img");
  const closeBtn = document.querySelector(".close");
  const grid = document.getElementById("projects-grid");

  // Fetch project data from JSON file
  fetch("projects.json")
    .then(response => response.json())
    .then(projects => {
      projects.forEach(project => {
        const card = document.createElement("div");
        card.classList.add("project-card");
        card.innerHTML = `
          <img src="${project.image}" alt="${project.title}" class="project-img">
          <h3>${project.title}</h3>
          <a href="${project.link}" class="project-link" target="_blank">View Project</a>
        `;
        grid.appendChild(card);
      });

      // Now bind zoom to images
      document.querySelectorAll(".project-img").forEach((img) => {
        img.addEventListener("click", () => {
          modal.style.display = "block";
          modalImg.src = img.src;
        });
      });
    });

  closeBtn.addEventListener("click", () => {
    modal.style.display = "none";
  });

  window.addEventListener("click", (e) => {
    if (e.target === modal) {
      modal.style.display = "none";
    }
  });
});

/*This is for the Experience-Timeline*/
fetch("experience.json")
  .then(res => res.json())
  .then(data => {
    const timeline = document.getElementById("timeline");

    data.forEach((item, index) => {
      const side = index % 2 === 0 ? "left" : "right";
      const container = document.createElement("div");
      container.classList.add("container", side);

      container.innerHTML = `
        <div class="content">
          <h3>${item.title} @ ${item.company}</h3>
          <p>${item.dates}</p>
          <img src="${item.image}" alt="${item.company}" />
        </div>
      `;

      timeline.appendChild(container);
    });
  });


