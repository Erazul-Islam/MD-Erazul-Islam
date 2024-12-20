/* eslint-disable prettier/prettier */
/* eslint-disable padding-line-between-statements */
"use client";

import { useEffect } from "react";
import $ from "jquery";

const SmoothScroller: React.FC = () => {
  useEffect(() => {
    const handleSmoothScroll = (event: JQuery.ClickEvent) => {
      event.preventDefault();

      const targetId = $(event.currentTarget).attr("href"); 
      if (targetId) {
        const targetElement = $(targetId);
        if (targetElement.length) {
          $("html, body").animate(
            {
              scrollTop: targetElement.offset()?.top || 0,
            },
            800, 
            "swing",
          );
        }
      }
    };

    const anchorTags = $('a[href^="#"]');
    anchorTags.on("click", handleSmoothScroll);


    return () => {
      anchorTags.off("click", handleSmoothScroll);
    };
  }, []);

  return null;
};

export default SmoothScroller;