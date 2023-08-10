
const google = window.google
function Map(){
    return (
        function initMap(){
            var options = {
                center:{lat:12.9716,lng:77.5946},
                zoom:8
            }
            var map = new google.maps.Map(document.getElementById('map'),options);
        }
    )
}
/* <script src="https://maps.googleapis.com/maps/api/js?key=AIzaSyAqpgr4MCboMasBvW3KRgOIqB36zKNemwA&libraries=places&callback=initMap"async></script> */

export default Map()