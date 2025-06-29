window.onload = function () {
  const boy = document.getElementById('boy');
  const message = document.getElementById('message');

  // Bước 1: Chàng trai bay lên tới cầu vồng
  setTimeout(() => {
    boy.style.bottom = '300px';
    boy.style.left = '50%';
    boy.style.transform = 'translateX(-50%)';
  }, 1000);

  // Bước 2: Chàng trai bay đến cô gái
  setTimeout(() => {
    boy.style.bottom = '20px';
    boy.style.left = 'calc(100% - 240px)';
    boy.style.transform = 'none';
  }, 4000);

  // Bước 3: Hiện thông điệp tình yêu
  setTimeout(() => {
    message.style.display = 'block';
  }, 6000);
};
