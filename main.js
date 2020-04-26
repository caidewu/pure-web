(function() {
    // while(1) ;
    console.log('sdfdsf');
})();

function handleClick() {
    const input = document.getElementById('text');
    const app = document.getElementById('app');
    console.log('input:', escape(input.value));
    $('#app').html(input.value);
}
