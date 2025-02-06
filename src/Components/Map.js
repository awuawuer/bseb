import React from "react";

function Maps() {
  return (
    <div>
      {/* Other content of your component */}
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m10!1m8!1m3!1d814.6616713454739!2d8.557748012005066!3d7.723992162845709!3m2!1i1024!2i768!4f13.1!5e1!3m2!1sen!2sng!4v1738859137041!5m2!1sen!2sng"
        width="496"
        height="283.28"
        style={{ border: 0 }}
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>
  );
}

export default Maps;
