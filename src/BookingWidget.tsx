import React, { useEffect, useRef } from "react";

declare global {
  interface Window {
    SimplybookWidget: any;
  }
}

const BookingWidget: React.FC = () => {
  const widgetContainerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const script = document.createElement("script");
    script.async = true;
    script.src = "//widget.simplybook.me/v2/widget/widget.js";
    script.onload = () => {
      new window.SimplybookWidget({
        widget_type: "button",
        url: "https://hhautoshop.simplybook.me",
        theme: "default",
        theme_settings: {
          timeline_hide_unavailable: "1",
          hide_past_days: "0",
          timeline_show_end_time: "0",
          timeline_modern_display: "as_slots",
          sb_base_color: "#1f3f68",
          display_item_mode: "block",
          booking_nav_bg_color: "#1f3f68",
          body_bg_color: "#f2f2f2",
          sb_review_image: "",
          dark_font_color: "#192331",
          light_font_color: "#f5fcff",
          btn_color_1: "#e45f59",
          sb_company_label_color: "#ffffff",
          hide_img_mode: "0",
          show_sidebar: "1",
          sb_busy: "#c7b3b3",
          sb_available: "#d6ebff",
        },
        timeline: "flexible_provider",
        datepicker: "top_calendar",
        is_rtl: false,
        app_config: {
          clear_session: 0,
          allow_switch_to_ada: 0,
          predefined: [],
        },
        button_title: "Book now",
        button_background_color: "#1f3f68",
        button_text_color: "#ffffff",
        button_position: "right",
        button_position_offset: "50%",
        container_id: "sbw_7c4b8n",
      });
    };

    document.head.appendChild(script);

    return () => {
      document.head.removeChild(script);
    };
  }, []);

  return <div id="sbw_7c4b8n" ref={widgetContainerRef}></div>;
};

export default BookingWidget;
