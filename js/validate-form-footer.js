"use strict"

document.addEventListener('DOMContentLoaded', function() {
  
  const form2 = document.querySelector('.form2__body');
  form2.addEventListener('submit', formSend);
  
  async function formSend(e) {
  e.preventDefault();

  let error = formValidate(form2);

  let formData = new FormData(form2);
  // formData.append('image', formImage.files[0]);

  if (error === 0) {
    form2.classList.add('_sending');
    let response = await fetch('sendmail.php', {
      method: 'POST',
      body: formData
    });
    if (response.ok){
      let result = await response.json();
      alert(result.message);
      formPreview.innerHTML = '';
      form2.reset();
      form2.classList.remove('_sending');
    } else {
      alert('Ошибка');
      form2.classList.remove('_sending');
    }
  } else {
    alert('Заполните обязательные поля');
    form2.classList.remove('_sending');
  }

}

  function formValidate(form) {
    let error = 0;
    let formReq = document.querySelectorAll('._req2');

    for (let index = 0; index < formReq.length; index++) {
      const input = formReq[index];
      formRemoveError(input);

      if (input.classList.contains('_email2')){
        if (emailTest(input)) {
          formAddError(input)
          error++;
        }
      } else if (input.classList.contains('_insta2')){
        if (instaTest(input)) {
          formAddError(input)
          error++;
        }
      }else if(input.getAttribute("type") === "checkbox" && input.checked === false) {
        formAddError(input);
        error++;
      } else{
        if (input.value === '') {
          formAddError(input);
          error++;
        }
      }
    }
    return error;
  }
  function formAddError(input) {
    input.parentNode.classList.add('_error');
    input.classList.add('_error');
  }
  function formRemoveError(input) {
    input.parentNode.classList.remove('_error');
    input.classList.remove('_error');
  }
  // Функция теста email
  function emailTest(input) {
    return  !/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,8})+$/.test(input.value);
  }
  // Функция теста Instagram
  function instaTest(input) {
    return !/^([A-Za-z0-9._](?:(?:[A-Za-z0-9._]|(?:\.(?!\.))){2,28}(?:[A-Za-z0-9._]))?)$/.test(input.value);
  }
  
});





  // // Функция добавления превью для фото Я не очень понял почему formImage.files[0]
  // const formImage = document.getElementById('formImage');

  // const formPreview = document.getElementById('formPreview');

  // formImage.addEventListener('change', () => {
  //   uploadFile(formImage.files[0]);
  // });

  // // Функция проверки типа файла
  // function uploadFile(file) {
  //   if (!['image/jpeg', 'image/png', 'image/gif'].includes(file.type)) {
  //     alert('Разрешены только изображения');
  //     formImage.value = '';
  //     return;
  //   }
  //   if (file.size > 2 * 1024 * 1024) {
  //     alert('Файл должен быть менее 2 МБ')
  //     return;
  //   }


  //   var reader = new FileReader();
  //   reader.onload = function (e) {
  //     formPreview.innerHTML = `<img src="${e.target.result}" alt="Фото">`; // {e.target.result} - Полученный результат загрузки FileReader() файла
  //   }
  //   reader.onerror = function(e) {
  //     alert('Ошибка');
  //   };
  //   reader.readAsDataURL(file);
  // }