document.addEventListener("DOMContentLoaded", () => {
  const skills = document.querySelectorAll('.skill');

  skills.forEach(skill => {
      skill.addEventListener('mouseover', () => {
          skill.style.transform = 'scale(1.2)';
          skill.style.transition = 'transform 0.3s';
      });

      skill.addEventListener('mouseout', () => {
          skill.style.transform = 'scale(1)';
          skill.style.transition = 'transform 0.3s';
      });
  });
});


function toggleNav() {
    const navList = document.querySelector('.nav-list');
    navList.classList.toggle('show');
  }
  
  function showSection(sectionId) {
    // Hide all sections
    document.querySelectorAll("section").forEach((section) => {
      section.classList.remove("active");
    });
  
    // Remove active class from all nav items
    document.querySelectorAll(".nav-list li").forEach((navItem) => {
      navItem.classList.remove("active");
    });
  
    // Show the selected section
    document.getElementById(sectionId).classList.add("active");
  
    // Set the active class on the corresponding nav item
    document.getElementById("nav-" + sectionId).classList.add("active");
  
    // Hide nav list after selection (if applicable)
    if (window.matchMedia("(max-width: 768px)").matches) {
      document.querySelector('.nav-list').classList.remove('show');
    }
  }
  