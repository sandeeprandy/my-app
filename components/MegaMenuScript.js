"use client"; // Important: Next.js 13 requires this for browser-side code
import { useEffect } from "react";

export default function MegaMenuScript() {
  useEffect(() => {
    let activeMenu = null;
    let isMobileMenuOpen = false;

    const handleScroll = () => {
      if (window.scrollY > 50) {
        document.querySelector(".mega-header")?.classList.add("scrolled");
      } else {
        document.querySelector(".mega-header")?.classList.remove("scrolled");
      }
    };

    const openDesktopMenu = (menuName) => {
      activeMenu = menuName;
      document.querySelector(`.mega-menu-trigger[data-menu="${menuName}"]`)?.classList.add("active");
      document.querySelector(`#megaDropdown-${menuName}`)?.classList.add("active");
    };

    const closeAllMenus = () => {
      activeMenu = null;
      document.querySelectorAll(".mega-menu-trigger").forEach(el => el.classList.remove("active"));
      document.querySelectorAll(".mega-menu-dropdown").forEach(el => el.classList.remove("active"));
    };

    // Scroll listener
    window.addEventListener("scroll", handleScroll);

    // Desktop menu toggles
    document.querySelectorAll(".mega-menu-trigger").forEach(trigger => {
      trigger.addEventListener("click", (e) => {
        e.stopPropagation();
        const menuName = trigger.dataset.menu;
        if (activeMenu === menuName) closeAllMenus();
        else openDesktopMenu(menuName);
      });
    });

    // Mobile menu toggle
    const mobileToggle = document.getElementById("mobileToggle");
    if (mobileToggle) {
      mobileToggle.addEventListener("click", () => {
        isMobileMenuOpen = !isMobileMenuOpen;
        document.getElementById("mobileMenu")?.classList.toggle("active");
        mobileToggle.classList.toggle("active");
        if (!isMobileMenuOpen) {
          document.querySelectorAll(".mega-mobile-submenu").forEach(el => el.classList.remove("active"));
          document.querySelectorAll(".mega-mobile-trigger").forEach(el => el.classList.remove("active"));
        }
      });
    }

    // Mobile submenu toggles
    document.querySelectorAll(".mega-mobile-trigger").forEach(trigger => {
      trigger.addEventListener("click", (e) => {
        e.stopPropagation();
        const menuName = trigger.dataset["mobileMenu"];
        const submenu = document.getElementById(`mobileSubmenu-${menuName}`);
        if (trigger.classList.contains("active")) {
          trigger.classList.remove("active");
          submenu?.classList.remove("active");
        } else {
          document.querySelectorAll(".mega-mobile-trigger").forEach(el => el.classList.remove("active"));
          document.querySelectorAll(".mega-mobile-submenu").forEach(el => el.classList.remove("active"));
          trigger.classList.add("active");
          submenu?.classList.add("active");
        }
      });
    });

    // Close on outside click
    document.addEventListener("click", (e) => {
      if (!e.target.closest(".mega-header")) {
        closeAllMenus();
        if (isMobileMenuOpen) mobileToggle?.click();
      }
    });

    // Close on menu item click
    document.querySelectorAll(
      ".mega-column-link, .mega-mobile-link, .mega-nav-link, .mega-mobile-nav-link"
    ).forEach(link => {
      link.addEventListener("click", () => {
        closeAllMenus();
        if (isMobileMenuOpen) mobileToggle?.click();
      });
    });

    // Cleanup
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return null; // No visible output
}
