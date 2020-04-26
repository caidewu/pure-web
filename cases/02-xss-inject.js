function handleClick(id) {
  const input = document.getElementById(id);
  const app = document.getElementById('app');
  console.log('input:', escape(input.value));
  if (id === 'by_innerHTML') {
    app.innerHTML = input.value;
  } else {
    $('#app').html(input.value);
  }
}
