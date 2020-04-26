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

document.getElementById('code1').innerText = '<img src="any.png" alt="" onerror="(function() { alert(\'xss inject\')})()" >';
document.getElementById('code2').innerText = '<script>alert(\'xss inject\')</script>';
