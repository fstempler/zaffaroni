import './googleMap.css'

const GoogleMap = ({ src, width, height, style = {}, allowFullScreen = true, loading = "lazy", referrerPolicy = "no-referrer-when-downgrade" }) => {
    return (
      <div style={{ maxWidth: "100%", overflow: "hidden" }}>
        <iframe
          src={src}
          width={width}
          height={height}
          style={{ border: "0", ...style }}
          allowFullScreen={allowFullScreen}
          loading={loading}
          referrerPolicy={referrerPolicy}
          title="Google Map"
        ></iframe>
      </div>
    );
  };
  
  export default GoogleMap;