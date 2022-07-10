//-----------------------------------------------------

let help_es = {
  'label_emit':
  'Emitir video',
  'label_receive':
  'Recibir video',
  'label_symmetric':
  'Video simétrico',
  'check_emit':
  'Marca esta casilla si quieres emitir tu señal video.',
  'symmetric_video':
  'Los alumnos reciben las señales de video de los otros alumnos (puede sobrecargar el sistema).',
  'check_receive':
  'Marca esta casilla si quieres recibir las señales de video.',
  'check_button':
  'Pulsa este botón para actualizar las opciones de video seleccionadas.',
  'bad_type':
  'Solo se pueden compartir archivos de texto, PDF, imágenes y videos.',
  'conmute_video':
  'Habilita/deshabilita la señal de video de este usuario.',
  'scroll':
  'Imagen desplazable',
  'camera_alert':
  'Si quieres usar tu cámara, autoriza su uso en el navegador y vuelve a entrar.',
  'micro_alert':
  'Si quieres usar tu micrófono, autoriza su uso en el navegador y vuelve a entrar.',
  'camera_and_micro_alert':
  'Si quieres usar tu micrófono o tu cámara, autoriza su uso en el navegador y vuelve a entrar.',
  'browser_tab':
  'Aula',
  'warning_testing':
  'Servidor en pruebas',
  'room_field':
  'Aula',
  'username_field':
  'Usuario',
  'teacher_password_field':
  'Contraseña profesor',
  'student_password_field':
  'Contraseña alumno',
  'submit_button':
  'Entrar',
  'room_field_help':
  'Caracteres permitidos: Letras (mayúsculas o minúsculas), números y "_".'+'\n'+
  'Se usan los primeros 10 caracteres.',
  'username_field_help':
  'Caracteres permitidos: Letras (mayúsculas o minúsculas), números y "_".'+'\n'+
  'Se usan los primeros 9 caracteres.',
  'teacher_password_field_help':
  'Si estás abriendo un aula, usa 8 caracteres como mínimo.'+'\n'+
  'Si estás tratando de entrar a un aula ya abierta, déjala en blanco.',
  'student_password_field_help':
  'Si estás abriendo un aula, usa 8 caracteres como mínimo.'+'\n'+
  'Si estás tratando de entrar a un aula ya abierta, debes disponer de ella.',
  'media':
  ['El profesor debe activarlo para que puedas hablar.'+'\n'+
  'Si está en rojo, la aplicación no ha detectado tu micrófono.',
  'El profesor debe activarlo para que puedas usar la pizarra.',
  'El profesor debe activarlo para que puedas usar el proyector.'],
  'unified_controls':
  ['Todos pueden hablar.',
  'Todos pueden escribir.',
  'Todos pueden usar el proyector.',
  'Nadie puede hablar.',
  'Nadie puede escribir.',
  'Nadie puede usar el proyector.'],
  'user_button':
  'Levanta la mano para pedir la palabra.'+'\n'+
  'El aula verá tu pedido y el profesor, eventualmente, te la dará.',
  'show_file':
  'Carga una lista de archivos en el proyector.'+'\n'+
  'Puedes cargar imágenes, PDFs, texto y referencias a videos de YouTube.',
  'backward':
  'Te muestra el archivo previo de la lista que has cargado.',
  'forward':
  'Te muestra el archivo siguiente de la lista que has cargado.',
  'send':
  'Proyecta el archivo actual para que el aula lo vea.',
  'alternator':
  'Enciende o apaga el Proyector.',
  'more_think':
  'Trazo más grueso.',
  'less_think':
  'Trazo más fino.',
  'eraser':
  'Borrador. Encierra lo que quieras borrar.',
  'clean':
  'Borra toda la pizarra.',
  'backward_board':
  'Pizarra anterior.',
  'forward_board':
  'Pizarra posterior. Si la actual es la última, crea una nueva.',
  'save_to_disk':
  'Guarda las pizarras. '+'\n'+'El destino es "boards(n).txt" en el directorio de descargas por defecto del navegador.',
  'load_from_disk':
  'Carga un conjunto de pizarras guardado.'+'\n'+'Atención: si no se ha guardado, el conjunto de pizarras actuales se pierde.',
  'touch_device':
  'Parece que tu dispositivo es táctil. Si mantienes presionado cualquier elemento por más de un segundo, verás un texto de ayuda.',
  'auto_spline':
  'Omite el suavizado del trazo al escribir.'+'\n'+'Afecta solo al trazo de quien escribe y puede ser útil para mejorar la fluidez de la escritura. Al resto, el trazo le llega siempre suavizado.',
  'refresh':
  'Resfresca la pizarra.'+'\n'+'Es de utilidad para ver la escritura suavizada en caso de que se haya activado la opción anterior.'
};

let help_en = {
  'label_emit':
  'Broadcast video',
  'label_receive':
  'Receive video',
  'label_symmetric':
  'Symmetric video',
  'check_emit':
  'Select this to broadcast your video feed.',
  'symmetric_video':
  'Students receive all the video feeds from the other students (might slowdown the program).',
  'check_receive':
  'Select this to receive video feeds.',
  'check_button':
  'Press this button to apply the currently selected video options.',  
  'bad_type':
  'Only text, PDF, image and video files can be shared.',
  'conmute_video':
  'Enable/disable the video track of this user.',
  'scroll':
  'scrollable image',
  'camera_alert':
  "To use your camera, you will have to grant browser permission.",
  'micro_alert':
  "To use your microphone, you will have to grant browser permission.",
  'camera_and_micro_alert':
  "To use your microphone or your camera, you will have to grant browser permission.",    
  'browser_tab':
  'Classroom',
  'warning_testing':
  'Currently in beta testing',
  'room_field':
  'Classroom',
  'username_field':
  'Username',
  'teacher_password_field':
  'Teacher password',
  'student_password_field':
  'Student password',
  'submit_button':
  'Log in',
  'room_field_help':
  'Allowed characters: letters (upper and lower case), numbers and "_".'+'\n'+
  'Only the first 10 characters are used.',
  'username_field_help':
  'Allowed characters: letters (upper and lower case), numbers and "_".'+'\n'+
  'Only the first 9 characters are used.',
  'teacher_password_field_help':
  'If you are setting up a classroom, use at least 8 characters.'+'\n'+
  'If you are joining a classroom, leave it blank.',
  'student_password_field_help':
  'If you are setting up a classroom, use at least 8 characters.'+'\n'+
  'If you are joining a classroom, the teacher should give you the student password.',
  'media':
  ['The teacher must activate it for you to speak.'+'\n'+
  'If it is red, a microphone could not be detected.',
  'The teacher must activate it for you to use the blackboard.',
  'The teacher must activate it for you to use the projector.'],
  'unified_controls':
  ['Everyone can talk',
  'Everyone can write',
  'Everyone can use the projector',
  'No one can speak',
  'No one can write',
  'No one can use the projector'],
  'user_button':
  'Ask permission to speak.'+'\n'+
  'The classroom will see your request and the teacher can allow you to speak.',
  'show_file':
  'Upload a list of files to the projector.'+'\n'+
  'You can upload images, PDFs, text and links to YouTube videos.',
  'backward':
  'It shows you the previous file in your uploaded list.',
  'forward':
  'It shows you the next file in your uploaded list.',
  'send':
  'Project the current file for the classroom to see.',
  'alternator':
  'Turn the projector on or off.',
  'more_think':
  'Thicker stroke.',
  'less_think':
  'Thinner stroke.',
  'eraser':
  'Eraser. Circle what you want to delete.',
  'clean':
  'Erase the entire blackboard.',
  'backward_board':
  'Previous blackboard.',
  'forward_board':
  'Next blackboard. If the current one is the last one, it creates a new one.',
  'save_to_disk':
  'Save the blackboards set.'+'\n'+'The destination is "boards(n).txt" in the browser\'s default download directory.',
  'load_from_disk':
  'Load a saved blackboards set.'+'\n'+'Warning: if not saved, the current blackboard set is lost.',
  'touch_device':
  'It seems you are using a touch screen. To access help prompts while using the application, tap any element for more than one second.',
  'auto_spline':
  'Skip stroke smoothing when writing.'+'\n'+'It can be useful to improve the flow of the writing, and it applies only to the person using the blackboard. Everyone else will always see smooth strokes.',
  'refresh':
  'Refresh the blackboard.'+'\n'+'It can be used to see smooth writing after enabling the previous option.'
};
let sym;
let local_media_stream = null;

let video_source, audio_source, video_source_device;
let i_want_to_receive_video, i_want_to_broadcast_video;
let left_percent = 15;
let contenedor_percent = 100 - left_percent;
let f10 = left_percent/10.;

let help = help_es;
let lang = window.location.href; // the user choice at login
let site = lang.slice(0,18);
lang = lang.slice(lang.length-2,lang.length);
let bad_login = 'bad_login_es.html';
if(lang==='en'){
  help = help_en;
  bad_login = 'bad_login_en.html';
}
let left = null;
let left_sup = null;
let left_inf = null;
let body = null;
let touch_device = null;
let popup_span = null;
let U = null;
let P = null;
let B = null;
let V = null;
let room = null;
let micro = false;
let camera = false;
let aspect = 0.75;
let owner = null;
let symmetric_video = null;
let video_separator = '#';
let Ids  = null;
let oldIds = [];

//------------------------------------------------------------
function createWebElements(){
  const main_div = document.createElement('div');
  main_div.setAttribute('id','main_div');
  main_div.style.display = 'none';
      const left = document.createElement('div');
      left.setAttribute('id','left');
          const left_sup = document.createElement('div');
          left_sup.setAttribute('id','left_sup');
            createCheckDiv();
            const div_mandos = document.createElement('div');
              div_mandos.setAttribute('id','div_mandos');
                  const boton_imagen = document.createElement('div');
                  boton_imagen.setAttribute('class','boton_imagen');
                      const file_image = document.createElement('img');
                      file_image.src = "/image/archivo.svg";
                      //file_image.style.width = '100%'; 
                      const show_file_input = document.createElement('button');
                      show_file_input.setAttribute('class','mandos');
                      show_file_input.setAttribute('id','show_file_input');
                  boton_imagen.appendChild(file_image);    
                  boton_imagen.appendChild(show_file_input);    
                  div_mandos.appendChild(boton_imagen);
                  
                  const boton_imagen2 = document.createElement('div');
                  boton_imagen2.setAttribute('class','boton_imagen');
                      const flecha_izquierda = document.createElement('img');
                      flecha_izquierda.src = "/image/flecha-izquierda.svg";
                      //flecha_izquierda.style.width = '100%'; 
                      const backward = document.createElement('button');
                      backward.setAttribute('class','mandos');
                      backward.setAttribute('id','backward');
                  boton_imagen2.appendChild(flecha_izquierda);    
                  boton_imagen2.appendChild(backward);    
                  div_mandos.appendChild(boton_imagen2);

                  const boton_imagen3 = document.createElement('div');
                  boton_imagen3.setAttribute('class','boton_imagen');
                      const flecha_correcta = document.createElement('img');
                      flecha_correcta.src = "/image/flecha-correcta.svg";
                      //flecha_correcta.style.width = '100%'; 
                      const forward = document.createElement('button');
                      forward.setAttribute('class','mandos');
                      forward.setAttribute('id','forward');
                  boton_imagen3.appendChild(flecha_correcta);    
                  boton_imagen3.appendChild(forward);    
                  div_mandos.appendChild(boton_imagen3);

                  const boton_imagen4 = document.createElement('div');
                  boton_imagen4.setAttribute('class','boton_imagen');
                      const subir = document.createElement('img');
                      subir.src = "/image/subir.svg";
                      //subir.style.width = '100%'; 
                      const send = document.createElement('button');
                      send.setAttribute('class','mandos');
                      send.setAttribute('id','send');
                  boton_imagen4.appendChild(subir);    
                  boton_imagen4.appendChild(send);    
                  div_mandos.appendChild(boton_imagen4);

          left_sup.appendChild(div_mandos);

              const boton_imagen_alternador = document.createElement('div');
              boton_imagen_alternador.setAttribute('class','boton_imagen');
              boton_imagen_alternador.setAttribute('id','boton_imagen_alternador');
                  const proyector = document.createElement('img');
                  proyector.src = "/image/proyector.png";
                  //proyector.style.width = '100%'; 
                  const alternator = document.createElement('button');
                  alternator.setAttribute('class','mandos');
                  alternator.setAttribute('id','alternator');
              boton_imagen_alternador.appendChild(proyector);    
              boton_imagen_alternador.appendChild(alternator);    
              left_sup.appendChild(boton_imagen_alternador);

              const hr1 = document.createElement('hr');
              hr1.setAttribute('size','2');
              left_sup.appendChild(hr1);
              const hr2 = document.createElement('hr');
              hr2.setAttribute('size','2');
          left_sup.appendChild(hr2);
      left.appendChild(left_sup);    

          const left_inf = document.createElement('div');
          left_inf.setAttribute('id','left_inf');
      left.appendChild(left_inf);
      main_div.appendChild(left);    
              
      const contenedor = document.createElement('div');
      contenedor.setAttribute('id','contenedor');
          const frame_aux = document.createElement('div');
          frame_aux.setAttribute('id','frame_aux');
          contenedor.appendChild(frame_aux);
          const frame_canvas = document.createElement('div');
          frame_canvas.setAttribute('id','frame_canvas');
              const drawing = document.createElement('canvas');
              drawing.setAttribute('id','drawing');
              frame_canvas.appendChild(drawing);
              const pointercanvas = document.createElement('canvas');
              pointercanvas.setAttribute('id','pointercanvas');
              frame_canvas.appendChild(pointercanvas);
              const menu = document.createElement('div');
              menu.setAttribute('id','menu');
                  const submenu = document.createElement('span');
                  submenu.setAttribute('id','submenu');
                  submenu.setAttribute('class','submenu');
                      const board_controls = document.createElement('span');
                      board_controls.setAttribute('id','board_controls');
                          const s0 = document.createElement('span');
                          s0.setAttribute('class','menu_elements');
                          s0.textContent ='\u2B24';
                          board_controls.appendChild(s0);
                          const s1 = document.createElement('span');
                          s1.setAttribute('class','menu_elements');
                          s1.textContent ='\u2B24';
                          board_controls.appendChild(s1);
                          const s2 = document.createElement('span');
                          s2.setAttribute('class','menu_elements');
                          s2.textContent ='\u2B24'; 
                          board_controls.appendChild(s2);
                          const s3 = document.createElement('span');
                          s3.setAttribute('class','menu_elements');
                          s3.textContent ='\u2B24';
                          board_controls.appendChild(s3);
                          const s4= document.createElement('span');
                          s4.setAttribute('class','menu_elements');
                          s4.textContent ='\u002B';
                          s4.style.color = 'black';
                          board_controls.appendChild(s4);
                          const s5 = document.createElement('span');
                          s5.setAttribute('class','menu_elements');
                          s5.textContent ='\u2212';
                          s5.style.color = 'black';
                          board_controls.appendChild(s5);
                          const s6 = document.createElement('span');
                          s6.setAttribute('class','menu_elements');
                          s6.textContent ='\u2715'; //u2B24
                          //s6.style.color = 'white';
                          board_controls.appendChild(s6);
                          const s7 = document.createElement('span');
                          s7.setAttribute('class','menu_elements');
                          s7.textContent ='\u2716'; // \u25A2
                          board_controls.appendChild(s7);
                          const s8 = document.createElement('span');
                          s8.setAttribute('class','menu_elements');
                          s8.textContent ='\u21D0';
                          s8.style.color = 'black';
                          board_controls.appendChild(s8);
                          const s9 = document.createElement('span');
                          s9.setAttribute('class','menu_elements');
                          s9.textContent ='\u21D2';
                          s9.style.color = 'black';
                          board_controls.appendChild(s9);
                          const s10 = document.createElement('span');
                          s10.setAttribute('class','menu_elements');
                          s10.textContent ='\u21A7';
                          s10.style.color = 'black';
                          board_controls.appendChild(s10);
                          const s11 = document.createElement('span');
                          s11.setAttribute('class','menu_elements');
                          s11.textContent ='\u21A5';
                          s11.style.color = 'black';
                          board_controls.appendChild(s11);
                          const s12 = document.createElement('span');
                          s12.setAttribute('class','menu_elements');
                          s12.textContent ='\u2621'; // \u2B24\u0020
                          s12.style.color = 'black';
                          board_controls.appendChild(s12);
                          const s13 = document.createElement('span');
                          s13.setAttribute('class','menu_elements');
                          s13.textContent ='\u21BB';
                          s13.style.color = 'black';
                          board_controls.appendChild(s13);
                      submenu.appendChild(board_controls);
                  menu.appendChild(submenu);
              frame_canvas.appendChild(menu);
          contenedor.appendChild(frame_canvas);    
      main_div.appendChild(contenedor);
  const cuerpo = document.getElementsByTagName('body')[0];
  cuerpo.appendChild(main_div); 


  // CSS block

  left.style.backgroundColor=colors.gray;
  frame_canvas.style.backgroundColor=colors.wall;
  frame_aux.style.backgroundColor=colors.frame;
  submenu.style.backgroundColor=colors.gray;

  left.style.width = left_percent+'%';
  left.style.height = 100+'%';

  left_sup.style.width = 100+'%';
  left_sup.style.height = 8.5*f10+'vw';
  left_sup.style.backgroundColor=colors.gray;


  div_mandos.style.width = 100+'%';
  div_mandos.style.height = 3.0*f10+'vw';
  div_mandos.style.marginLeft = 1.0*f10+'vw';
  div_mandos.style.marginTop = 1.0*f10+'vw';
  div_mandos.style.backgroundColor=colors.gray;

  boton_imagen.style.width = 2*f10+'vw';
  boton_imagen.style.height = 2*f10+'vw';
  boton_imagen2.style.width = 2*f10+'vw';
  boton_imagen2.style.height = 2*f10+'vw';
  boton_imagen3.style.width = 2*f10+'vw';
  boton_imagen3.style.height = 2*f10+'vw';
  boton_imagen4.style.width = 2*f10+'vw';
  boton_imagen4.style.height = 2*f10+'vw';
  
  file_image.style.width = 100+'%';
  file_image.style.height = 'auto';

  flecha_izquierda.style.width = 100+'%';
  flecha_izquierda.style.height = 'auto';

  flecha_correcta.style.width = 100+'%';
  flecha_correcta.style.height = 'auto';

  subir.style.width = 100+'%';
  subir.style.height = 'auto';

  proyector.style.width = 100+'%';
  proyector.style.height = 'auto';

  boton_imagen_alternador.style.width = 4*f10+'vw';
  boton_imagen_alternador.style.height = 2*f10+'vw';
  boton_imagen_alternador.style.marginLeft = 2.8*f10+'vw';
  left_inf.style.width = 100+'%';
  boton_imagen_alternador.style.backgroundColor=colors.gray;

  contenedor.style.width = contenedor_percent+'%';
  contenedor.style.height = 100+'%';

  function createCheckDiv(){
    const div_check = document.createElement('div');
    div_check.setAttribute('class','unified_controls');
    div_check.style.width = 7*f10+'vw';
    div_check.style.height = 2*f10+'vw';
    div_check.style.margin = 1*f10+'vw';
      const check_button = document.createElement('button');
      check_button.style.backgroundColor = 'white';
      check_button.style.border = 'none';
      check_button.style.borderRadius='50%';
      check_button.style.display='inline';
      check_button.style.width= 1*f10+'vw';
      check_button.style.height= 1*f10+'vw';
      check_button.style.position= 'relative';
      check_button.style.marginLeft= 0.66*f10+'vw';
      check_button.style.marginRight= 0.66*f10+'vw';
      check_button.style.marginBottom= 0.1*f10+'vw';
      check_button.setAttribute('title',help.check_button);
      help_movil(check_button,help.check_button,'left');      
      check_button.addEventListener('click', function(e){
        i_want_to_broadcast_video = check_emit.checked; 
        i_want_to_receive_video= check_receive.checked;
        console.log(i_want_to_broadcast_video+'  '+i_want_to_receive_video); 
        changeVideoPreferences();
      },false);
    div_check.appendChild(check_button);
      const check_emit = document.createElement('input');
      check_emit.setAttribute('type','checkbox');
      check_emit.setAttribute('id','check_emit');
      check_emit.style.borderRadius='50%';
      check_emit.style.display='inline';
      check_emit.style.width= 1*f10+'vw';
      check_emit.style.height= 1*f10+'vw';
      check_emit.style.position= 'relative';
      check_emit.style.marginLeft= 0.66*f10+'vw';
      check_emit.style.marginRight= 0.66*f10+'vw';
      check_emit.style.marginBottom= 0.1*f10+'vw';
      check_emit.setAttribute('title',help.check_emit);
      help_movil(check_emit,help.check_emit,'left');      
      const check_receive = document.createElement('input');
      check_receive.setAttribute('type','checkbox');
      check_receive.setAttribute('id','check_receive');
      check_receive.style.borderRadius='50%';
      check_receive.style.display='inline';
      check_receive.style.width= 1*f10+'vw';
      check_receive.style.height= 1*f10+'vw';
      check_receive.style.position= 'relative';
      check_receive.style.marginLeft= 0.66*f10+'vw';
      check_receive.style.marginRight= 0.66*f10+'vw';
      check_receive.style.marginBottom= 0.1*f10+'vw';
      check_receive.setAttribute('title',help.check_receive);
      help_movil(check_receive,help.check_receive,'left');      
    div_check.appendChild(check_emit);
    div_check.appendChild(check_receive);
    div_check.style.backgroundColor=colors.gray;

    check_emit.checked = i_want_to_broadcast_video; 
    check_receive.checked = i_want_to_receive_video;

    left_sup.appendChild(div_check);
  }
}
//------------------------------------------------------------

const colors = {
  activated: 'blue',
  gray: '#cccccc',
  blackboard: '#667f79',
  wall: '#fffbdc',
  frame:  '#777777',
  off: 'rgba(0,0,0,0)',
  on: 'rgba(0,254,0,0.5)', 
  strong_on: 'rgba(0,254,0,1)',
  disabled: 'rgba(200,200,200,0.75)',
  enabled: 'rgba(0,0,0,0)', 
  hand_up: 'yellow',
  white: 'white',
  red: 'red',
  teacher: 'rgba(0,128,0,1)'
}
const default_state = [false,false,false,false,false]; // voice, blackboard, proj, micro, hand
let my_user = null;

window.onload = function(){
  function is_touch_device() {  
    try {  
      document.createEvent("TouchEvent");  
      alert(help.touch_device);  
      return true;  
    } catch (e) {  
      return false;  
    }  
  }
  touch_device = is_touch_device();
  body = document.getElementsByTagName('body')[0];
  popup_span = document.createElement('span');
  popup_span.setAttribute('id','popup_span');

  let el = document.getElementById('broadcast_video');
  el.setAttribute('title',help.check_emit);
  help_movil(el,help.check_emit,'login');    
  el = document.getElementById('label_broadcast_video');
  el.innerHTML = help.label_emit;

  el = document.getElementById('receive_video');
  el.setAttribute('title',help.check_receive);
  help_movil(el,help.check_receive,'login');    
  el = document.getElementById('label_receive_video');
  el.innerHTML = help.label_receive;

  el = document.getElementById('symmetric_video');
  el.setAttribute('title',help.symmetric_video);
  help_movil(el,help.symmetric_video,'login');    
  el = document.getElementById('label_symmetric_video');
  el.innerHTML = help.label_symmetric;

  el = document.getElementById('room');
  el.setAttribute('title',help.room_field_help);
  el.addEventListener('contextmenu',function (e){
    e.preventDefault();
  });
  help_movil(el,help.room_field_help,'login');    
  el.setAttribute('placeholder',help.room_field);

  el = document.getElementById('username');
  el.setAttribute('title',help.username_field_help);
  el.addEventListener('contextmenu',function (e){
    e.preventDefault();
  });
  help_movil(el,help.username_field_help,'login');    
  el.setAttribute('placeholder',help.username_field);

  el = document.getElementById('teacher_password');
  el.setAttribute('title',help.teacher_password_field_help);
  el.addEventListener('contextmenu',function (e){
    e.preventDefault();
  });
  help_movil(el,help.teacher_password_field_help,'login');    
  el.setAttribute('placeholder',help.teacher_password_field);

  el = document.getElementById('user_password');
  el.setAttribute('title',help.student_password_field_help);
  el.addEventListener('contextmenu',function (e){
    e.preventDefault();
  });
  help_movil(el,help.student_password_field_help,'login');    
  el.setAttribute('placeholder',help.student_password_field);

  document.getElementById('submit_button').setAttribute('value',help.submit_button);

  let warning = document.createTextNode(help.warning_testing);
  document.getElementById('warning').appendChild(warning);
  const vw = Math.max(document.documentElement.clientWidth || 0, window.innerWidth || 0);
  const vh = Math.max(document.documentElement.clientHeight || 0, window.innerHeight || 0);  
}

class DIM{
    static getDivDimension(divId){
      const div=document.getElementById(divId);
      const w = div.offsetWidth;
      const h = div.offsetHeight;
      return [w,h];
    }
    static setDivDimension(divId,dim){
      const div = document.getElementById(divId);
      if(dim[0]>=0){
          div.style.width = dim[0]+'%';
      }
      if(dim[1]>=0){
        div.style.height = dim[1]+'%';
      }
    }
    static setCanvasDimension(divId,dim){
      const context = document.getElementById(divId).getContext('2d');
      if(dim[0]>=0){
        context.canvas.width = dim[0];
      }
      if(dim[1]>=0){
        context.canvas.height = dim[1];
      }
    }
    static resizeImage(){
      const image_canvas = document.getElementById('image_canvas');
      let image = document.getElementById('image');
      if(image_canvas){
          const image_w_h=image.width/image.height;
          const div_doc = document.getElementById('docdiv');
          image = document.getElementById('image');
          let w,h,gap_left,gap_top;
          if(image && div_doc.offsetHeight != 0){
              var W_H= div_doc.offsetWidth/div_doc.offsetHeight;
              if(image_w_h >= W_H){
                w = div_doc.offsetWidth;
                image.width = w;
                h = image.width/image_w_h;
                image.height = h;
                gap_top = (div_doc.offsetHeight-image.height)/2;
                gap_left = 0;
                image.style.position = 'relative';
                image.style.top = gap_top+'px';
                image.style.left = gap_left+'px';
              }
              else{
                h = div_doc.offsetHeight;
                image.height = h;
                w = image.height*image_w_h;
                image.width = w;
                gap_left = (div_doc.offsetWidth-image.width)/2;
                gap_top = 0;
                image.style.position = 'relative';
                image.style.left = gap_left+'px';
                image.style.top = gap_top+'px';
              }
          }
          const ld = DIM.getDivDimension('left');
          DIM.setCanvasDimension('image_canvas',[w,h]);
          image_canvas.style.position = 'absolute';
          image_canvas.style.left = (gap_left)+ld[0]+'px';
          image_canvas.style.top = gap_top+'px';
      }
    }
    static dimensiona_left_inf(){
      let h_left = left.offsetHeight;
      let h_left_sup = left_sup.offsetHeight;
      left_inf.style.height = (h_left - h_left_sup)+'px';
    }
}

class User{
  constructor(id){
      this.id = id;
      this.name = easyrtc.idToName(id); // for my_user I must assign it post join ()
      this.buttons = {main:null, media: [null,null,null] }
      this.state = [];
      this.stream = null; // my out stream for this user
      this.audio_tag = null; // <audio> to listen to this user
      this.user_div = null;
      this.user_video_tag = null;
      this.user_div_player = null;
      for(let j=0;j<default_state.length;j++){
        this.state[j] = default_state[j];
      }
      let s = this;
      s.createUserButtons();
      s.createUserDiv();
      if(s.id===owner){
          s.state = [true,true,true,false,false];
      }

      if(easyrtc.myEasyrtcid != s.id){ // is not my user
        if(micro || camera){ // is not my user and I have a micro
          // my out stream for this user
          let streamName = easyrtc.idToName(easyrtc.myEasyrtcid)+'_'+
                          easyrtc.idToName(s.id);
          let audioTracks = easyrtc.getLocalStream().getAudioTracks();
          let videoTracks = easyrtc.getLocalStream().getVideoTracks();
          console.log('symmetric_video= '+symmetric_video);
          if(symmetric_video && i_want_to_broadcast_video){
            s.stream = easyrtc.buildLocalMediaStream(streamName, audioTracks, videoTracks);
            console.log('**AUDIO-VIDEO: '+streamName);
          }
          else{
            if((s.id===owner || U.im_the_owner) && i_want_to_broadcast_video){
              s.stream = easyrtc.buildLocalMediaStream(streamName, audioTracks, videoTracks);
              console.log('**AUDIO-VIDEO: '+streamName);
            }
            else{
              s.stream = easyrtc.buildLocalMediaStream(streamName, audioTracks, []);
              console.log('******AUDIO: '+streamName);
            }
          }  
        }
        // the audio_tag for this user
        const audio = document.createElement('audio');
        audio.setAttribute('id',s.id);
        audio.setAttribute('autoplay','autoplay');
        this.audio_tag = audio;
      }
      else{ // is my user
        if(micro){
          s.state[3]=true; // I have micro
        }
        easyrtc.setPeerListener(sendMicroState, 'have you micro?');
        function sendMicroState(easyrtcid, tipo, data, targeting){
          console.log('Le informo de mi micro a ' + easyrtc.idToName(easyrtcid)
          +': ' + s.state[3]);
          easyrtc.sendData(easyrtcid,'microState',{id:s.id, state:s.state});
        }
      }
      s.lookButtons();
  }
  createUserButtons(){
      // create media buttons, register listeners and configure them
      let s = this;
      for(let i=0;i<3;i++){
        const bu = document.createElement('button');
        bu.style.display='inline';
        bu.style.width= 1*f10+'vw';
        bu.style.height= 1*f10+'vw';
        bu.style.position= 'relative';
        bu.style.marginLeft= 0.66*f10+'vw';
        bu.style.marginRight= 0.66*f10+'vw';
        bu.style.marginBottom= 0.1*f10+'vw';
        bu.setAttribute('title', help.media[i]);
        help_movil(bu,help.media[i],'left');
        bu.addEventListener('click', function(e){
          if(i==0 && !s.state[3]){return;}
          s.state[i] = !s.state[i];
          s.updateButtons();
          console.log('media '+i+' de '+s.name+': '+s.state[i]);
          U.stateChangeMessage(s.id,i);
          // simulates the click to cancel the voice request
          if(U.im_the_owner && i==0 && s.state[i] && s.state[4]){
            s.buttons.main.click();
          }
        },false);
        s.buttons.media[i] = bu;
      }  
      // create main button, register listeners and configure it
      const button = document.createElement('button');
      button.setAttribute('class', 'user_button');
      button.style.fontSize = 1*f10+'vw';
      button.style.width = 7*f10+'vw';
      button.style.height = 2*f10+'vw';
      button.style.backgroundColor = colors.white;
      button.setAttribute('title', help.user_button);
      help_movil(button,help.user_button,'left');
      button.addEventListener('contextmenu',function (e){
        e.preventDefault();
      });
      button.style.userSelect = 'none';
      const text = document.createTextNode(this.name);
      button.appendChild(text);
      button.addEventListener('click', function(e){
        // only can modify the hand up the button owner or the moderator
        if(s.isMyUser() && U.im_the_owner){
          return; 
        }
        if(s.isMyUser() || U.im_the_owner){
          s.state[4] = !s.state[4];
          if(s.state[4]){
            console.log('levanto la mano');
            U.handUpMessage(s.id,true);
            U.updateHandUpList(U.userIndex(s.id),true);
          }
          else{
            console.log('bajo la mano');
            U.handUpMessage(s.id,false);
            U.updateHandUpList(U.userIndex(s.id),false);
          }
          U.showUsers();
        }
      },false);
      s.buttons.main = button;
  }
  createUserDiv(){
    let s = this;
    const userdiv = document.createElement('div');
    userdiv.setAttribute('class','quartet_div');
    userdiv.style.width = 7*f10+'vw';
    userdiv.style.height = 3.25*f10+'vw';
    userdiv.style.margin = 1.5*f10+'vw';
  
    for(let j=0;j<3;j++){
      userdiv.appendChild(s.buttons.media[j]);
    }
    const divplayer = document.createElement('div');
    divplayer.setAttribute('class','video_div');
    divplayer.style.width = 7*f10+'vw';
    divplayer.style.height = 5.25*f10+'vw';
    divplayer.setAttribute('id','video_div_'+s.id);
    divplayer.style.backgroundColor=colors.gray;
    const videotag = document.createElement('video');
    videotag.setAttribute('id','vt_'+s.id);
    videotag.setAttribute('autoplay','autoplay');
    videotag.setAttribute('title',help.conmute_video);
    help_movil(videotag,help.conmute_video,'left');    
    videotag.setAttribute('playsinline','playsinline');
    videotag.addEventListener('click',function(){
      let vt = this.srcObject.getVideoTracks();
      vt[0].enabled = !vt[0].enabled;
      if(s.isMyUser()){
        for(let i=0;i<U.u.length;i++){
          let stream_i = U.u[i].stream;
          if(stream_i){
            let vt_i = stream_i.getVideoTracks();
            vt_i[0].enabled = !vt_i[0].enabled;
          }  
        }
      }
    })
    divplayer.appendChild(videotag);
    s.user_video_tag = videotag;
    s.user_div_player = divplayer;
    userdiv.appendChild(s.buttons.main);
    s.user_div = userdiv;
  }
  addVideoTag(){
    let s = this;
      s.user_div.removeChild(s.buttons.main);
      s.user_div.appendChild(s.user_div_player);
      s.user_div.appendChild(s.buttons.main);
      s.user_div.style.height = 8.25*f10+'vw';
  }
  removeVideoTag(){
    let s = this;
      s.user_div.removeChild(s.user_div_player);
      userdiv.style.height = 3.25*f10+'vw';
    }
  setUpVideoStream(stream) {
    let w = 7*f10;
    let h = w*aspect;
    let s = this;
    if(stream && stream.getVideoTracks().length>0){
        console.log('nvideo= '+stream.getVideoTracks().length);
        console.log('naudio= '+stream.getAudioTracks().length);
        easyrtc.setVideoObjectSrc(s.user_video_tag, stream);
        s.user_video_tag.muted = true;
        s.user_video_tag.style.width = w+'vw';
        s.user_video_tag.style.height = h+'vw';
        s.addVideoTag();
    }
  }
  setUpMirrorVideo() {
    let s = this;
    s.setUpVideoStream(easyrtc.getLocalStream());
    console.log('**AUDIO-VIDEO: '+easyrtc.getLocalStream().streamName);

  }

  updateButtons(){
    let s = this;
    for(let j=0;j<3;j++){
      if(s.state[j]){
        s.buttons.media[j].style.backgroundColor=colors.strong_on;
      }
      else{
        if(j==0 && s.state[3]==false){
          s.buttons.media[j].style.backgroundColor=colors.red;
        }
        else{
          s.buttons.media[j].style.backgroundColor=colors.off;
        }
      }
    }
    let list = U.hand_up_list;
    let index = U.getMyIndex();
    let text;
    s.buttons.main.removeChild(s.buttons.main.lastChild); // clean text
    if(s.state[4]){ // the button is hand up
      s.buttons.main.style.backgroundColor=colors.hand_up;
      // If my button, I should see my position in the hand_up_list.
      // If not, I must write only the name.
      if(s.id==easyrtc.myEasyrtcid){ // is mine
        for(let i=0;i<list.length;i++){ // searching my position
          if(list[i]==index){
            text = document.createTextNode(s.name+'('+(i+1)+'º)');
            break;
          }
        }
      }
      else{ // is not my button
        text = document.createTextNode(s.name);
      }
    }
    else{// the button is not hand up
      s.buttons.main.style.backgroundColor=colors.white;
      if(s.id===owner){ // is the moderator's button
        text = document.createTextNode(s.name+'(*)');
      }
      else{
        text = document.createTextNode(s.name);
      }
    }
    s.buttons.main.appendChild(text);
  }
  lookButtons(){
    for(let j=0;j<3;j++){
      this.buttons.media[j].disabled = true;
    }
  }
  unlockButtons(){
    for(let j=0;j<3;j++){
      this.buttons.media[j].disabled = false;
    }
  }
  setState(e){
    let s = this;
    for(let j=0;j<e.length;j++){
      s.state[j] = e[j];
    }
    if(s.id==easyrtc.myEasyrtcid){
      console.log('estado3='+s.state[3]);
    }
    s.updateButtons();
  }
  totalControl(){
    let s = this;
    let state = [s.state[3],true,true,s.state[3],false];
    /*
    if(s.id===owner){
      console.log('desde totalControl');
      console.log(state);
    }
    */
    s.setState(state);
  }
  /*
  noControl(){
    let s = this;
    let state = [false,false,false,s.state[3],false];
    s.setState(state);
  }
  */
  getState(){
    let s = this;
    let state=[];
    for(let j=0;j<s.state.length;j++){
      state[j] = s.state[j];
    }
    return state;
  }
  isMyUser(){
    let s = this;
    if(easyrtc.myEasyrtcid == s.id){
      return true;
    }
    else{
      return false;
    }
  }
  setName(){
    // to assign the name before join ().
    let s = this;
    s.name = easyrtc.idToName(easyrtc.myEasyrtcid);
    s.buttons.main.firstChild.nodeValue = s.name;
  }
}

class Users{
  constructor(){
    // It runs only once, at startup.
    this.u=[];
    this.show_order=[];
    this.hand_up_list=[];
    this.i_just_came_in = true;
    this.im_the_owner = false;
    let s = this;
    easyrtc.setPeerListener(receiveStateChange, 'enabledMedia');
    function receiveStateChange(easyrtcid, tipo, data, targeting){
      const i = data.index;
      const imedia = data.media;
      const state = data.state;
      /*
      if(s.u[i].id===owner){
        console.log('desde receiveStateChange');
        console.log(state);
      }
      */
      s.u[i].setState(state);
      if((s.getMyIndex() == i) && imedia == 2){
        if(state[2] || s.im_the_owner){
          P.unlockAllControls();
          console.log('unlockAllControls desde change');

        }
        else{
          P.lockAllControls();
          console.log('lockAllControls desde change');
        }
      }
      if((s.getMyIndex() == i) && imedia == 0){ // si soy yo
        s.enableMicro(state[0]);
      }
      B.cleanPointer();
      P.cleanPointer();
    }
    easyrtc.setPeerListener(receiveHandUpChange, 'handUp');
    function receiveHandUpChange(easyrtcid, type, data, targeting){
      const i = data.index;
      const value = data.hand_up;
      console.log('recibo '+easyrtc.idToName(easyrtcid)+' mano: '+value);
      s.u[i].state[4] = value;
      s.updateHandUpList(i,value);
      s.showUsers();
    }
    easyrtc.setPeerListener(receiveMicroState, 'microState');
    function receiveMicroState(easyrtcid, type, data, targeting){
      const index = s.userIndex(data.id);
      let state = data.state;
      if(s.u[index].id===owner){
        if(state[3]){
          state = [true,true,true,true,false];
        }
        else{
          state = [false,true,true,false,false];
        }
        //console.log('desde receiveMicroState');
        //console.log(state);
      }
      s.u[index].setState(state);
    }
  }
  orderToShow(){
    // is called by showUsers ().
    let s = this;
    let myindex = s.getMyIndex();
    s.show_order = [];
    s.show_order[0] = s.userIndex(owner); // always the moderator first
    if(s.im_the_owner){ // order according to hand_up_list
      for(let i=0;i<s.hand_up_list.length;i++){
        s.show_order.push(s.hand_up_list[i]);
      }
      // those who are not on the list are not hand up
      for(let i=0;i<s.u.length;i++){
        if(i!=myindex && !s.u[i].state[4]){
          s.show_order.push(i);
        }
      }
    }
    else{
      s.show_order[1] = myindex; // the user, behind the moderator
      for(let i=0;i<s.u.length;i++){
        if(i!=s.userIndex(owner) && i!=myindex ){
          s.show_order.push(i);
        }
      }
    }
  }
  updateHandUpList(index,value){
    // is called by the 'handUp' event
    let s = this;
    // the index position in the hand_up_list
    let position = -1;
    for(let i=0;i<s.hand_up_list.length;i++){
      if(s.hand_up_list[i]==index){
        position=i;
        break;
      }
    }
    if(position==-1){ // I don't have it in the list, I add it at the end.
      s.hand_up_list.push(index);
    }
    else{ // it's on the list, I remove it
      s.hand_up_list.splice(position,1);
    }
  }
  setOccupants(){
    // It is executed when there is a change in the number of users. Is called by
    // setRoomOccupantListener(). When I connect, it runs for the first time.
    // If I just entered, I put all u in default. I must ask for the states and,
    // load it through loadState(). This is handled by receiveHE().

    let s = this;
    if(easyrtc.myEasyrtcid===owner){ 
      s.im_the_owner = true;
    }
    if(s.u.length>0){ // is another one
      s.i_just_came_in = false;
    }
    if(s.im_the_owner && s.i_just_came_in){ 
      Users.createsOwnerUnifiedControls();
    }
    let new_users = []; 
    for(let i=0;i<Ids.length;i++){
        let index = s.userIndex(Ids[i]); // the id exist?
        if(index >= 0){ //Yes
          new_users.push(s.u[index]);
          console.log('agrego '+s.u[index].name);
        }
        else{ // No
          if(Ids[i]===easyrtc.myEasyrtcid){ // I just connected
            my_user.setName();
            new_users.push(my_user);
            console.log('creo '+my_user.name);
          }
          else{ // is another one
            let nu = new User(Ids[i]);
            if(Ids[i]===owner){
              console.log('verde para owner');
              nu.totalControl();
              nu.updateButtons();
            }
            new_users.push(nu);
            console.log('creo '+nu.name);
            document.body.appendChild(nu.audio_tag);
            console.log('pregunto a '+ nu.name +' por su micro');
            easyrtc.sendData(Ids[i],'have you micro?',0);
          }
        }
    }
    s.u = new_users; // I point u to the new array
    let myu = s.u[s.getMyIndex()];
    //console.log(s.u);
    s.enableMicro(my_user.state[0]);

  }
  userIndex(id){
    // Given an id, returns its index (if it doesn't exist, returns -1).
    if(!id){
      return -1;
    }
    for(let i=0;i<this.u.length;i++){
      if(id==this.u[i].id){
        return i;
      }
    }
    return -1;
  }
  loadStates(states){
    // Cuando recibe el estado de los usuarios (receiveHE()), lo carga con este
    // método. Ésto sólo ocurre al conectar y después de haber ejecutado
    // setOccupants().
    let s = this;
    for(let i=0;i<states.length;i++){
      if(s.getMyIndex() != i){ // no sobreescribo mi estado
        /*
        if(s.u[i].id===owner){
          console.log('desde loadStates');
          console.log(states[i]);
        }
        */
        s.u[i].setState(states[i]);
      }  
      else { // es mi estado
        if(states[i][2] || s.im_the_owner){
          P.unlockAllControls();
          console.log('unlockAllControls desde load');

        }
        else{
          P.lockAllControls();
          console.log('lockAllControls desde load');
        }
      }
    }
    s.showUsers();
  }
  showUsers(){
    console.log('showUsers()');
    // Muestra los usuarios en left.
    // Se ejecuta desde setRoomOccupantListener, cada vez que se actualizan los
    // usuarios, y al conectar (desde loadStates).
    // Si el owner se ha desconectado, el primer índice será -1 
    let s = this;

    let last_child = 0;
    
    
    if(s.im_the_owner){
      last_child = 1;
    }
    
    
    while (left_inf.children[last_child]) {
      left_inf.removeChild(left_inf.lastChild);
    }
    s.orderToShow(); // actualiza show_order
    console.log(s.show_order);
    for(let i=0;i<s.show_order.length;i++){
      let index = s.show_order[i];
      if(index!=-1){
        s.u[index].updateButtons();
        left_inf.appendChild(s.u[index].user_div);
      }  
    }
  }
  getMyIndex(){
    return this.userIndex(easyrtc.myEasyrtcid);
  }
  stateChangeMessage(id,imedia){
    // Es llamado por un click en un botón de media de u.
    // Informa a todos del cambio. Si he cambiado mi micro,
    // lo implementa.
    let s = this;
    let i = s.userIndex(id);
    easyrtc.sendData({targetRoom:room},'enabledMedia',
    {index: i, media:imedia, state:s.u[i].state} );
    if((s.getMyIndex() == i) && imedia == 0){ // si soy yo
      s.enableMicro(s.u[i].state[0]);
    }
    if((s.getMyIndex() == i) && imedia == 2){
      if(s.u[i].state[2]){
        P.unlockAllControls();
        console.log('unlockAllControls desde message');

      }
      else{
        P.lockAllControls();
        console.log('lockAllControls desde message');
      }
    }
    B.cleanPointer();
    P.cleanPointer();
  }
  handUpMessage(id,value){
    // Es llamado por un click en mi botón de usuario.
    // Informa a todos del cambio.
    let s = this;
    let i = s.userIndex(id);
    console.log('informo '+easyrtc.idToName(id)+' mano: '+value);
    easyrtc.sendData({targetRoom:room},'handUp',
    {index: i, hand_up:value} );
  }
  enableMicro(value){
    let s = this;
    for(let i=0;i<s.u.length;i++){
      let stream = s.u[i].stream;
      if(stream){
        easyrtc.enableMicrophone(value,stream.streamName);
      }
    }
  }
  getStates(){
    // devuelve una copia de los states.
    let states = [];
    for(let i=0;i<this.u.length;i++){
      states.push(this.u[i].getState());
    }
    return states;
  }
  getHandUpList(){
    // devuelve una copia de la lista.
    let list = [];
    for(let i=0;i<this.hand_up_list.length;i++){
      list.push(this.hand_up_list[i]);
    }
    return list;
  }
  lookButtons(){
    for(let i=0;i<this.u.length;i++){
        this.u[i].lookButtons();
    }
  }
  unlockButtons(){
    for(let i=0;i<this.u.length;i++){
        this.u[i].unlockButtons();
    }
  }
  static createsOwnerUnifiedControls(){
    const div_unified_controls = document.createElement('div');
    div_unified_controls.setAttribute('class','unified_controls');
    div_unified_controls.style.width = 7*f10+'vw';
    div_unified_controls.style.height = 3*f10+'vw';
    div_unified_controls.style.margin = 1.5*f10+'vw';
  
    for(let j=0;j<6;j++){
      const bu = document.createElement('button');
      //bu.setAttribute('class','boton_medios');
      if(j<3){
        bu.style.backgroundColor = colors.strong_on;
      }
      else{
        bu.style.backgroundColor = colors.off;
      }
      bu.style.borderRadius='50%';
      bu.style.display='inline';
      bu.style.width= 1*f10+'vw';
      bu.style.height= 1*f10+'vw';
      bu.style.position= 'relative';
      bu.style.marginLeft= 0.66*f10+'vw';
      bu.style.marginRight= 0.66*f10+'vw';
      bu.style.marginBottom= 0.1*f10+'vw';
      bu.setAttribute('title',help.unified_controls[j]);
      help_movil(bu,help.unified_controls[j],'left');      
      bu.addEventListener('click', function(e){
        let media;
        let allowed;
        if(j<3){
          media = j;
          allowed = true;
        }
        else{
          media = j-3;
          allowed = false;
        }
        U.modifyAll(media,allowed);
      },false);
      div_unified_controls.appendChild(bu);
    }
    left_inf.appendChild(div_unified_controls);
  }
  modifyAll(media,allowed){
    let s = this;
    for(let i=0;i<s.u.length;i++){
      if(i!=s.getMyIndex()){
        s.u[i].state[media] = allowed;
        s.u[i].updateButtons();
        //console.log('media '+i+' de '+s.name+': '+s.state[i]);
        U.stateChangeMessage(s.u[i].id,media);
      }  
    }
  }
}

function initMedia(){
  return new Promise(function(resolve,reject){
    if(!video_source){
      i_want_to_broadcast_video = false;
    }
    let media_code;
    // 0: no video, no micro 
    // 1: no video, yes micro 
    // 2: yes video, no micro 
    // 3: yes video, yes micro
    if(i_want_to_broadcast_video){
      if(audio_source){
        media_code=3;
      }
      else{
        media_code=2;
      }
    }
    else{
      if(audio_source){
        media_code=1;
      }
      else{
        media_code=0;
      }
    } 
    easyrtc.enableDataChannels(true);
    easyrtc.enableVideo(i_want_to_broadcast_video);
    easyrtc.enableAudio(audio_source);
    easyrtc.initMediaSource(
        function(mediastream){
          console.log('Init, como la seda (1)');
          resolve([i_want_to_broadcast_video,audio_source]);
        },
        function(errorCode, errmesg){
          switch(media_code){
            // 0: no video, no micro 
            // 1: no video, yes micro 
            // 2: yes video, no micro 
            // 3: yes video, yes micro
            case 0: //no video, no micro. 
              console.log('sources: nada');
              console.log('Init Error. Uso: nada(1)');
              resolve([false,false]);
              break;
            case 1://no video, yes micro
              console.log('sources: micro');
              easyrtc.enableAudio(false);
              easyrtc.enableVideo(false);
              easyrtc.initMediaSource(
                function(mediastream){
                  console.log('Init ok. Uso: nada(2)');
                  resolve([false,false]);
                },
                function(errorCode, errmesg){
                  alert(help.micro_alert);
                  console.log('Init error. Uso: nada(2)');
                  resolve([false,false]);
                });
              break;
            case 2://yes video, no micro
              console.log('sources: cámara');
              easyrtc.enableAudio(false);
              easyrtc.enableVideo(false);
              easyrtc.initMediaSource(
                function(mediastream){
                  console.log('Init ok. Uso: nada(2)');
                  resolve([false,false]);
                },
                function(errorCode, errmesg){
                  console.log('Init error. Uso: nada(2)');
                  if(i_want_to_broadcast_video){
                    alert(help.camera_alert);
                  }  
                  resolve([false,false]);
              });
              break;
            case 3://yes video, yes micro
              console.log('sources: cámara y micro');
              // I test without camera
              easyrtc.enableVideo(false);
              easyrtc.enableAudio(true);
              easyrtc.initMediaSource(
                function(mediastream){
                  console.log('Init ok. Uso: micro(2)');
                  local_media_stream = mediastream;
                  if(i_want_to_broadcast_video){
                    alert(help.camera_alert);
                  }  
                  resolve([false,true]);
                },
                function(errorCode, errmesg){
                  // I test without micro
                  easyrtc.enableVideo(true);
                  easyrtc.enableAudio(false);
                  easyrtc.initMediaSource(
                    function(mediastream){
                      console.log('Init ok. Uso: cámara(3)');
                      alert(help.micro_alert);
                      resolve([true,false]);
                    },
                    function(errorCode, errmesg){
                      easyrtc.enableVideo(false);
                      easyrtc.enableAudio(false);
                      easyrtc.initMediaSource(
                        function(mediastream){
                          console.log('Init ok. Uso: nada(4)');
                          resolve([false,false]);
                        },
                        function(errorCode, errmesg){ 
                          console.log('Init error. Uso: nada(4)');
                          if(i_want_to_broadcast_video){
                            alert(help.camera_alert);
                          }  
                          alert(help.micro_alert);
                          resolve([false,false]);
                        });
                    });
                });
          }
        });
  });
}

function join(){            
  easyrtc.joinRoom(room,null,function(roomName){
    console.log('Entré en el aula '+roomName);
    P.createsFileReceiver();
    if(!B){
      B = new Blackboard();
    }
    document.getElementById('main_div').style.display = 'block';
    window.dispatchEvent(new Event('resize'));
    },
    function(errorCode,errorText,roomName){
        console.log('No pude entrar en el aula '+roomName);
        console.log(errorText);
        easyrtc.disconnect();
        window.location = bad_login;
  });
}

function performCall(otherEasyrtcid) {
  var successCB = function(otherCaller, mediaType) {
    console.log(mediaType+' con ' + easyrtc.idToName(otherCaller));
  };
  var failureCB = function(errorCode, errorMessage) {
    console.log('No me pude conectar con ' + easyrtc.idToName(otherEasyrtcid));
    console.log('errorCode= '+errorCode);
  };
  var acceptedCB = function(wasAccepted, otherUser) {
      if(wasAccepted) {
        console.log(easyrtc.idToName(otherUser) + ' aceptó la llamada');
      }
      else{
        console.log(easyrtc.idToName(otherUser) + ' no aceptó la llamada');
      }
  };
  if(micro || camera){
    console.log('llama con micro '+U.u[U.userIndex(otherEasyrtcid)].stream.streamName);
    easyrtc.call(otherEasyrtcid, successCB, failureCB, acceptedCB,
    [U.u[U.userIndex(otherEasyrtcid)].stream.streamName]);
  }
  else{
    easyrtc.call(otherEasyrtcid, successCB, failureCB, acceptedCB);
  }
}

function changeVideoPreferences(){
  function closeStream(stream){
    let tracks = stream.getTracks();
    for(let i=0;i<tracks.length;i++){
      tracks[i].stop();
      console.log('stop track '+i+' of stream '+stream.streamName);
    }
    easyrtc.enableCamera(false,stream.streamName);
  }  
  function closeLocalStream(stream){
    easyrtc.closeLocalMediaStream(stream.streamName)
    easyrtc.enableCamera(false,stream.streamName);
  }  

  easyrtc.hangupAll();

  console.log('cierro localStream '+easyrtc.getLocalStream().streamName);
  closeLocalStream(easyrtc.getLocalStream());
  if(my_user.user_video_tag){
    my_user.user_video_tag.srcObject = null;
  }
  for(let i=0;i<U.u.length;i++){
    if(U.u[i].stream){
      console.log('cierro LocalStream '+U.u[i].stream.streamName);
      closeLocalStream(U.u[i].stream);     
    }
  }
  setTimeout(function(){
      easyrtc.leaveRoom(room, function(roomName){
      console.log("I leave the classroom");
      oldIds=[];
        setTimeout(function(){
          initMedia().then(function(value){
            micro = value[1];
            camera = value[0];
            U = new Users();
            my_user = new User(easyrtc.myEasyrtcid);
            join(); // 
          });
        },1000);
    },
    function(errorCode, errorText, roomName){
      alert("I couldn't leave the classroom");
    });
  },1000);
}  

function callTheOthers(){
  setTimeout(function(){
    for(i=0;i<U.u.length-1;i++){ // no me llamo a mí mismo
      console.log('llamo a '+U.u[i].name);
      performCall(U.u[i].id);
    }
  },1000);
}


function login() {
  function makeid(length) {
    var result           = '';
    //var characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    var characters       = '0123456789';
    var charactersLength = characters.length;
    for ( var i = 0; i < length; i++ ) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
  }  
  room = document.getElementById('room').value.toLowerCase().slice(0,10);
  let user, upass, mpass;
  if(room==='q' || room==='a'){ // debug 
    upass='mewuqvkdgreoqcv';
    if(room==='q'){ // teacher 
      user='profe3com';
      mpass='vektqpvdmtfglre';
    }
    else{
      user='a_'+makeid(3);
      mpass='';
    }
    room='aula_local';
  }
  else{
    user = document.getElementById('username').value.slice(0,9);
    mpass= document.getElementById('teacher_password').value;
    upass= document.getElementById('user_password').value;
  }    

  i_want_to_broadcast_video = document.getElementById('broadcast_video').checked; 
  i_want_to_receive_video= document.getElementById('receive_video').checked; 
  sym = document.getElementById('symmetric_video').checked; 
  createWebElements();

  left = document.getElementById('left');
  left_sup = document.getElementById('left_sup');
  left_inf = document.getElementById('left_inf');

  P = new Proyector();
  V = new YouTubeVideo();

  document.title = help.browser_tab +' '+ room;

  const html = document.getElementsByTagName('html')[0]; 
  body.removeChild(document.getElementById('popup'));
  body.style.touchAction = 'none';
  html.style.touchAction = 'none';
  html.style.overflow = 'hidden';  
  body.style.overflow = 'hidden';  
  let re = /^[a-zA-Z0-9._ñÑ]+$/;
  function az09(s) {
    return re.test(s);
  }  
  if(az09(user) && az09(room)){
    connection(user,upass,mpass);
  }
  else{
    window.location = bad_login;
  }
}
//fhm
function help_movil(element,text,type) {
  if(type==='login'){
    popup_span.style.width = 100+'vw'
    popup_span.style.top = 0+'vw';
    popup_span.style.left= 0+'vw';
  }
  else{
    popup_span.style.width = 3*left_percent+'vw'
    popup_span.style.top = 25+'vh';
    popup_span.style.left= 2*left_percent+'vw';
  }
  let TO,dispatch;
  element.addEventListener( 'touchstart', function ( event ) {
    dispatch = false;
    TO = setTimeout(function(){
        dispatch = true;
        body.appendChild(popup_span);    
        popup_span.textContent = text;
    },1000);
  });
  element.addEventListener( 'touchend', function ( event ) {
    clearTimeout(TO);
    console.log(dispatch+'  '+'end');
    if(dispatch){
      body.removeChild(popup_span);
    }    
  });
}

function connect(user,upass,mpass){
  console.log('USERNAME:'+easyrtc.setUsername(user));
  easyrtc.setCredential({room:room, username:user, mpassword:mpass, upassword:upass, symmetric:sym});
  serverConnection();
  function serverConnection(){  
      easyrtc.connect('easyrtc.blackboard', function (easyrtcid,roomOwner) {
          
          console.log('Conecté con el server ');

          let w=0.7*DIM.getDivDimension('left_inf')[0];
          let h=3*w/4;
          easyrtc.setVideoDims(w, h);
          initMedia().then(function(value){
            micro = value[1];
            camera = value[0];
            U = new Users();
            my_user = new User(easyrtcid);
            join(); // 
          });
          
        },
      function (errorCode, message) {
          console.log(message);
          window.location = bad_login;
      });
  }   
}

function connection(user,upass,mpass) {
    easyrtc.getVideoSourceList(function(list){
      if(list.length>0){
        video_source_device = list[0];
        video_source = true;
      }
      else{
        video_source = false;
      }
      console.log('video: '+video_source);
      easyrtc.getAudioSourceList(function(list){
        if(list.length>0){
          audio_source = true;
        }
        else{
          audio_source = false;
        }
        console.log('audio: '+audio_source);
        connect(user,upass,mpass);
      });
    });

  
}

easyrtc.setRoomOccupantListener(function(roomName, list){
    if(roomName===room){
      Ids = easyrtc.getRoomOccupantsAsArray(roomName);
      if(!Ids){
        return;
      }
    }
    else{
      return;
    }
    if(Ids.length===oldIds.length){
      return;
    }
    oldIds = Ids;
    let myindex = -1;
    for(let i=0;i<Ids.length;i++){
      if(Ids[i]===easyrtc.myEasyrtcid){
        myindex=i;
        break;
      }
    }
    if(myindex===-1){
      return;
    }

    //setTimeout(function(){
    console.log('setRoomOccupantListener '+ roomName);
    setTimeout(function(){
      let owner_sym = easyrtc.getRoomField(roomName,'owner');
      if(owner_sym){
        owner = owner_sym[0];
        console.log('owner= '+ owner);
        symmetric_video = owner_sym[1];
      }
      U.setOccupants();
      if(U.i_just_came_in){ // Acabo de entrar
        my_user.setUpMirrorVideo();
  
        if(U.im_the_owner){ // Acabo de entrar y soy el owner
          // independientemente del default, control total.
          let i = U.getMyIndex();
          U.u[i].totalControl();
          P.unlockAllControls();
          console.log('unlockAllControls desde setRoom');
          U.unlockButtons();
        }
        else{ // Acabo de entrar y no soy el owner
          // los mandos deben estar congelados
          // los botones deben estar congelados
          P.lockAllControls();
          console.log('lockAllControls desde setRoom');
        }
        if(U.u.length==1){ // estoy solo
          console.log('No pido ni llamo');
          U.showUsers();
        }
        else{
          setTimeout(function(){
            console.log("llamo a los otros");
            callTheOthers();
            demandHED(); // y una vez obtenida, generar botones
          },1000);
        }
      }    
      else{ // no soy yo el que he entrado
        console.log('No pido ni llamo');
        U.showUsers();
        if(U.im_the_owner){
          U.unlockButtons();
        }
      }
    },1000);
});

easyrtc.setStreamAcceptor(function(easyrtcid, stream, streamName) {
    // Si al llamar o ser llamado me envían un stream, lo registro.
    console.log('setStreamAcceptor');
    const audio = document.getElementById(easyrtcid);
    console.log(easyrtc.idToName(easyrtcid)+ ' '+stream.id+' '+stream.streamName);
    console.log('registro el audio ' + stream.streamName);
    easyrtc.setVideoObjectSrc(audio,stream);
    console.log('symmetric_video= '+symmetric_video);
    if(i_want_to_receive_video){
      if(symmetric_video){
        console.log('registro el video ' + stream.streamName);
        U.u[U.userIndex(easyrtcid)].setUpVideoStream(stream);
      }
      else{
        if(owner===easyrtcid || U.im_the_owner){
          console.log('registro el video ' + stream.streamName);
          U.u[U.userIndex(easyrtcid)].setUpVideoStream(stream);
        }
        else{
          U.u[U.userIndex(easyrtcid)].setUpVideoStream(null);
        }
      }
    }  
});

easyrtc.setOnStreamClosed( function (easyrtcid, stream, streamName) {
      // cuando otro cierra el stream que me envía...  
      console.log('se ha cerrado '+streamName);
      let tracks = stream.getTracks();
      for(let j=0;j<tracks.length;j++){
        //console.log('readyState='+tracks[j].readyState);
        tracks[j].stop();
        console.log('stop track '+j+' de '+streamName);
        //console.log('readyState='+tracks[j].readyState);
      }
      let videotag = document.getElementById('vt_'+easyrtcid);
      if(videotag){
        console.log(videotag.id);
        videotag.srcObject = null;
      }
      else{
        console.log('sin videotag');
      }
});


easyrtc.setAcceptChecker(function(easyrtcid, responsefn) {
  /* si me llaman, acepto siempre que la llamada prvenga del aula
  if(U.userIndex(easyrtcid)==-1){
        responsefn(false);
        alert('Atención: Se ha bloqueado una llamada que no proviene del aula');
  }
  else{*/
    let stream = U.u[U.userIndex(easyrtcid)].stream;
    if(stream){ // si tengo micro o cámara, acepto y envío mi stream
      responsefn(true,[stream.streamName]);
    }
    else { // si no tengo micro o cámara, sólo acepto. Podré escuchar.
      responsefn(true);
    }
    console.log('Acepto la conexión de ' + easyrtc.idToName(easyrtcid));
  //}
});

easyrtc.setPeerListener(receiveHE, 'goesHE');
function receiveHE(easyrtcid, type, data, targeting) {
  console.log('recibo HE de '+easyrtc.idToName(easyrtcid));
  let states = data.states;
  B.boards = data.boards;
  U.hand_up_list = data.list;
  B.ip = data.ip;
  B.loadBoard();
  U.loadStates(states);
}

easyrtc.setPeerListener(sendHE, 'pidoHE');
function sendHE(easyrtcid, tipo, data, targeting){
  console.log('envío HE a '+easyrtc.idToName(easyrtcid));
  let states = U.getStates();
  let list = U.getHandUpList();
  easyrtc.sendData(easyrtcid,'goesHE', { boards:B.boards,
    ip:B.ip, states:states, list:list });
  if(P.isProyectorOn()){
    easyrtc.sendData(easyrtcid,'hidden_board',0);
  }
  else{
    easyrtc.sendData(easyrtcid,'oculta_proyector',0);
  }
}

easyrtc.setPeerListener(envioD, 'pidoD');
function envioD(easyrtcid, tipo, data, targeting){
  console.log('recibo el pedido del D de '+easyrtc.idToName(easyrtcid));
  if(P.document!=null){
    console.log('envío D a '+easyrtc.idToName(easyrtcid));
    // Hay que mejorarlo con una promesa. Se debe esperar a tener establecida
    // la comunicación con el que ha pedido el documento. Sucede que el pedido
    // puede venir por socket antes de tener la conexión de datos.
    // Como un apaño:

    setTimeout(function (){
      P.sendFile(P.document,easyrtcid);
    },1000);
  }
}

function demandHED(){
    const i = U.u.length-2;
    if(i>=0){
      console.log('pido HE a '+U.u[i].name);
      easyrtc.sendData(U.u[i].id,'pidoHE',0);
    }
    console.log('pido D a todos');
    easyrtc.sendData({targetRoom:room},'pidoD',0);
}





class Blackboard{
  constructor(){
    this.mouse_down_over = false;
    this.auto_smooth = true;
    this.ip = 0; // el índice de la pizarra en uso
    this.boards = []; // el array de boards
    this.boards[0] = [];
    this.fileInput = document.createElement('input');
    this.fileInput.className = 'fileInput';
    this.fileInput.type = 'file';
    this.fileInput.multiple = false;
    this.fileInput.style.display = 'none';

    this.canvas = document.getElementById('drawing');
    this.pointer_canvas  = document.getElementById('pointercanvas');
    this.ctx = this.canvas.getContext('2d');
    this.ctx_pointer = this.pointer_canvas.getContext('2d');
    this.board_controls = document.getElementById('board_controls');

    this.black = this.board_controls.children[ 0 ];
    this.red = this.board_controls.children[ 1 ];
    this.green = this.board_controls.children[ 2 ];
    this.blue = this.board_controls.children[ 3 ];
    this.more_think = this.board_controls.children[ 4 ];
    this.less_think = this.board_controls.children[ 5 ];
    this.eraser = this.board_controls.children[ 6 ];
    this.clean = this.board_controls.children[ 7 ];
    this.backward = this.board_controls.children[ 8 ];
    this.forward = this.board_controls.children[ 9 ];
    this.save_to_disk = this.board_controls.children[ 10 ];
    this.load_from_disk = this.board_controls.children[ 11 ];
    this.auto_spline = this.board_controls.children[ 12 ];
    this.refresh = this.board_controls.children[ 13 ];

    this.eraser_activated = false;
    this.board_color = colors.blackboard;
    this.pen_color = 'white';
    this.pen_thickness = 2;
    this.active_color = this.pen_color;
    this.active_thickness = this.pen_thickness;
    this.black.style.color = 'black';
    this.red.style.color = 'red';
    this.green.style.color = 'white';
    this.blue.style.color = 'yellow';
    this.eraser.style.color = 'black';
    this.clean.style.color = 'black';
    this.setHelp();
    this.frames();
    this.setListeners();
    this.move_mouse();
  }
  setHelp(){
    let s = this;
    s.more_think.setAttribute('title',help.more_think);
    help_movil(s.more_think,help.more_think,'menu');    
    s.less_think.setAttribute('title',help.less_think);
    help_movil(s.less_think,help.less_think,'menu');    
    s.eraser.setAttribute('title',help.eraser);
    help_movil(s.eraser,help.eraser,'menu');    
    s.clean.setAttribute('title',help.clean);
    help_movil(s.clean,help.clean,'menu');    
    s.backward.setAttribute('title',help.backward_board);
    help_movil(s.backward,help.backward_board,'menu');    
    s.forward.setAttribute('title',help.forward_board);
    help_movil(s.forward,help.forward_board,'menu');    
    s.save_to_disk.setAttribute('title',help.save_to_disk);
    help_movil(s.save_to_disk,help.save_to_disk,'menu');    
    s.load_from_disk.setAttribute('title',help.load_from_disk);
    help_movil(s.load_from_disk,help.load_from_disk,'menu');    
    s.auto_spline.setAttribute('title',help.auto_spline);
    help_movil(s.auto_spline,help.auto_spline,'menu');    
    s.refresh.setAttribute('title',help.refresh);
    help_movil(s.refresh,help.refresh,'menu');    
  }
  setListeners(){
    let s = this;
    const click_draw_event = new Event('click_draw');
    s.board_controls.addEventListener('click_draw', function(e){
      s.eraser_activated = false;
      s.eraser.style.color='black';
      s.active_color = s.pen_color;
      s.active_thickness = s.pen_thickness;
    },false);
    s.eraser.addEventListener( 'click', function ( event ) {
      s.eraser_activated = !s.eraser_activated;
      if(s.eraser_activated){
        s.eraser.style.color=colors.activated;
      }
      else{
        s.eraser.style.color='black';
      }
    } );

    s.clean.addEventListener( 'click', function ( event ) {
      if(!U.u[U.getMyIndex()].state[1]){
        return;
      }
      s.boards[s.ip]=[];
      easyrtc.sendData({targetRoom:room},'cleaning', 0);
      s.cleanBoard();
      s.loadBoard();
    } );
    s.black.addEventListener( 'click', function ( event ) {
      s.pen_color='black';
      s.active_color=s.pen_color;
      s.board_controls.dispatchEvent(click_draw_event);
    } );
    s.red.addEventListener( 'click', function ( event ) {
      s.pen_color='red';
      s.active_color=s.pen_color;
      s.board_controls.dispatchEvent(click_draw_event);} );
    s.green.addEventListener( 'click', function ( event ) {
      s.pen_color='white';
      s.active_color=s.pen_color;
      s.board_controls.dispatchEvent(click_draw_event);
    } );
    s.blue.addEventListener( 'click', function ( event ) {
      s.pen_color='yellow';
      s.active_color=s.pen_color;
      s.board_controls.dispatchEvent(click_draw_event);
    } );
    s.more_think.addEventListener( 'click', function ( event ) {
      if(s.pen_thickness<20){
        s.pen_thickness = s.pen_thickness + 1;
        s.active_thickness = s.pen_thickness;
      }
    } );
    s.less_think.addEventListener( 'click', function ( event ) {
      if(s.pen_thickness>1){
        s.pen_thickness = s.pen_thickness - 1;
        s.active_thickness = s.pen_thickness;
      }
    } );
    s.forward.addEventListener( 'click', function ( event ) {
      if(!U.u[U.getMyIndex()].state[1]){
        return;
      }
      s.ip = s.ip + 1;
      if(s.ip > s.boards.length-1){
        s.boards[s.ip]=[];
      }
      easyrtc.sendData({targetRoom:room},'boardChange', {ip:s.ip});
      s.cleanBoard();
      s.loadBoard();
    } );
    s.backward.addEventListener( 'click', function ( event ) {
      if(!U.u[U.getMyIndex()].state[1]){
        return;
      }
      console.log('retrocedo');

      s.ip = s.ip - 1;
      if(s.ip<0){
        s.ip = s.boards.length-1;
      }
      easyrtc.sendData({targetRoom:room},'boardChange', {ip:s.ip});
      s.cleanBoard();
      s.loadBoard();
    } );
    s.save_to_disk.addEventListener( 'click', function ( event ) {
      if(!U.u[U.getMyIndex()].state[1]){
        return;
      }
      let boards_blob = new Blob([JSON.stringify(s.boards)]);
      easyrtc_ft.saveAs(boards_blob,'boards');
    } );
    s.load_from_disk.addEventListener( 'click', function ( event ) {
      if(!U.u[U.getMyIndex()].state[1]){
        return;
      }
      if(s.fileInput) {
        s.fileInput.click();
      }
    } );
    s.auto_spline.addEventListener( 'click', function ( event ) {
      if(!U.u[U.getMyIndex()].state[1]){
        return;
      }
      s.auto_smooth = !s.auto_smooth;
      if(s.auto_smooth){
        s.auto_spline.style.color='black';
      }
      else{
        s.auto_spline.style.color=colors.activated;
      }
    } );
    s.refresh.addEventListener( 'click', function ( event ) {
      if(!U.u[U.getMyIndex()].state[1]){
        return;
      }
      s.loadBoard();
    } );

    s.fileInput.addEventListener('change', function (e) {
        let fr = new FileReader();
        fr.readAsText(s.fileInput.files[0]);
        fr.onload = function(event){
          s.boards = JSON.parse(fr.result);
          s.ip = s.boards.length-1;
          s.cleanBoard();
          s.loadBoard();
          // debo enviar a todos
          easyrtc.sendData({targetRoom:room},'loadBoards', { boards:s.boards });
        };
    });

    easyrtc.setPeerListener(actualizaPizarras, 'loadBoards');
    function actualizaPizarras(easyrtcid, tipo, data, targeting) {
      console.log('recibo carga boards de '+easyrtc.idToName(easyrtcid));
      s.boards = data.boards;
      s.ip = s.boards.length - 1;
      s.cleanBoard();
      s.loadBoard();
    }
    easyrtc.setPeerListener(cleaning, 'cleaning');
    function cleaning(easyrtcid, tipo, data, targeting) {
      console.log('recibo cleaning de '+easyrtc.idToName(easyrtcid));
      s.boards[s.ip] = [];
      s.cleanBoard();
      s.loadBoard();
    }
    easyrtc.setPeerListener(boardChange, 'boardChange');
    function boardChange(easyrtcid, tipo, data, targeting) {
      console.log('recibo cambio de pizarra '+easyrtc.idToName(easyrtcid));
      s.ip = data.ip;
      if(s.ip > s.boards.length-1){
        s.boards[s.ip]=[];
      }
      s.cleanBoard();
      s.loadBoard();
    }
    // escucha el movimiento del puntero
    easyrtc.setPeerListener(pointerMove, 'pointer');
    function pointerMove(easyrtcid, tipo, data, targeting) {
        let x = data.x;
        let y = data.y;
        x *= s.canvas.width;
        y *= s.canvas.height;
        s.pointer_canvas.width = s.pointer_canvas.width;
        //ctx_pointer.drawImage(puntero,x,y,5,5);
        s.ctx_pointer.beginPath();
        s.ctx_pointer.arc(x, y, 15, 0, 2 * Math.PI, false);
        s.ctx_pointer.lineWidth = 1;
        s.ctx_pointer.strokeStyle = 'red';
        s.ctx_pointer.stroke();
      }
    // escucha los trazos xxxescucha
    easyrtc.setPeerListener(stroke_listener, 'strokes');
    function stroke_listener(easyrtcid, tipo, data, targeting) {
        const tra = data.trazo;
        s.boards[s.ip].push(tra);
        const xys = tra[0];
        const col = tra[1];
        const gro = tra[2];
        const bor = tra[3];
        let xys_canvas = s.deepCopy(xys);
        for(let i in xys_canvas){
          xys_canvas[i][0] *= s.canvas.width;
          xys_canvas[i][1] *= s.canvas.height;
        }
        if(xys.length>1){
          if(!bor){
            s.drawSpline(xys_canvas,col,gro);
          }
          else{
            s.draw_eraser_polygon(xys_canvas,s.board_color,2);
          }
        }
        else{
          if(!bor){
            s.draw_point(xys_canvas[0][0],xys_canvas[0][1],col,gro);
          }  
        }  
    }
    // draw stroke and move pointer xxxdraw
    s.pointer_canvas.onmousedown = s.pointer_canvas.ontouchstart = function (e) {
      s.mouse_down_over = true;
      if(!U.u[U.getMyIndex()].state[1]){
        return;
      }
      const rect = s.canvas.getBoundingClientRect();
      const guide_width=1;
      let dash_line = false;
      if(s.eraser_activated){
        dash_line =  true;
      }
      else{
        dash_line = false;
      }
      let ox = e.clientX || e.touches[0].clientX;
      let oy = e.clientY || e.touches[0].clientY;

      ox -= rect.left;
      oy -= rect.top;
      let xys = [ [ox, oy] ];
      s.pointer_canvas.onmousemove = s.pointer_canvas.ontouchmove = function (e) {
        let nx,ny;
          if(e.touches!=null){
            nx = e.touches[0].clientX;
            ny = e.touches[0].clientY;
          }
          else{
            nx = e.clientX;
            ny = e.clientY;
          }
          nx -= rect.left;
          ny -= rect.top;
          let dx = nx - ox;
          let dy = ny - oy;
          if ( dx*dx + dy*dy > 25) {
              s.draw_segment(ox, oy, nx, ny,s.active_color,guide_width,dash_line);
              xys.push([nx, ny]);
              ox = nx;
              oy = ny;
          }
          nx /= s.canvas.width;
          ny /= s.canvas.height;
          easyrtc.sendData({targetRoom:room},'pointer', { x: nx, y: ny });
      };
      window.onmouseup= s.pointer_canvas.ontouchend = function (e) {
        if(s.mouse_down_over){
          s.MOUSE_UP(xys);
        }
        s.mouse_down_over = false;
      };
    }
  }
  frames(){
        let s = this;
        const px_menu = 45;
        const menu = document.getElementById('menu');
        const ra = 16/9;
        resize();
        function setCanvasParameters(){
          const fd = DIM.getDivDimension('frame_canvas');
          const ld = DIM.getDivDimension('left');
          let w, h;
          if(fd[0]/fd[1] < ra){
            w = fd[0];
            h = w/ra;
          }
          else{
            h = fd[1];
            w = h*ra;
          }
          DIM.setCanvasDimension('drawing',[w,h]);
          DIM.setCanvasDimension('pointercanvas',[w,h]);
          const gap_bottom = (fd[1]-h)/2;
          s.canvas.style.position = 'relative';
          s.canvas.style.top = gap_bottom+'px';
          s.canvas.style.left = (fd[0]-w)/2+'px';
          s.pointer_canvas.style.position = 'absolute';
          s.pointer_canvas.style.top = gap_bottom+'px';
          s.pointer_canvas.style.left = (fd[0]-w)/2+ld[0]+'px';
          //menu.style.bottom = (gap_bottom+px_menu)+'px';
          menu.style.bottom = (px_menu-gap_bottom)+'px';
        }
        window.onresize = function(){
          resize();
        }
        function resize(){
          DIM.dimensiona_left_inf();
          setCanvasParameters();
          s.cleanBoard();
          s.loadBoard();
          DIM.resizeImage(null);
          if(V){
            V.initialize_player();
          }
        }
  }
  cleanBoard(){
      let s = this;
      s.ctx.fillStyle = s.board_color;
      s.ctx.fillRect(0, 0,s.canvas.width, s.canvas.height);
  }
  deepCopy(a){
      let b=[];
      for(let i=0;i<a.length;i++){
        b.push(a[i].slice());
      }
      return b;
  }
  loadBoard(){
      // xxxload
      let s = this;
      s.cleanBoard();
      for(let index in s.boards[s.ip]){
        const tra = s.boards[s.ip][index];
        const xys = tra[0];
        const col = tra[1];
        const gro = tra[2];
        const bor = tra[3];
        let xys_canvas = s.deepCopy(xys);
        for(let i in xys_canvas){
          xys_canvas[i][0] *= s.canvas.width;
          xys_canvas[i][1] *= s.canvas.height;
        }
        if(xys.length>1){
          if(!bor){
            s.drawSpline(xys_canvas,col,gro);
          }
          else{
            s.draw_eraser_polygon(xys_canvas,s.board_color,2);
          }
        }
        else{
          s.draw_point(xys_canvas[0][0],xys_canvas[0][1],col,gro);
        }  
      }
  }
  cleanPointer(){
      this.pointer_canvas.width = this.pointer_canvas.width;
  }
  draw_point(x, y, color, grosor) {
    let s = this;
    s.ctx.lineWidth = 1;
    s.ctx.fillStyle = color;
    let xr = x-(grosor+1)/2;
    let yr = y-(grosor+1)/2;
    s.ctx.fillRect(xr,yr,grosor,grosor);
  }
  draw_segment(x1, y1, x2, y2, color, grosor,dash) {
        let s = this;
        s.ctx.lineWidth = grosor;
        s.ctx.strokeStyle = color;
        if(dash){
          s.ctx.setLineDash([1, 3]);
        }
        else{
          s.ctx.setLineDash([]);
        }
        s.ctx.beginPath();
        s.ctx.moveTo(x1, y1);
        s.ctx.lineTo(x2, y2);
        s.ctx.stroke();
        s.ctx.closePath();
  }
  draw_eraser_polygon(poligonal,color,grosor) {
      let s = this;
      s.ctx.strokeStyle = color;
      s.ctx.lineWidth = grosor;
      s.ctx.fillStyle = color;
      s.ctx.beginPath();
      s.ctx.moveTo(poligonal[0][0], poligonal[0][1]);
      for (let i=1; i<poligonal.length; i++) {
          s.ctx.lineTo(poligonal[i][0], poligonal[i][1]);
      }
      s.ctx.stroke();
      s.ctx.closePath();
      s.ctx.fill();
      s.ctx.setLineDash([]);
      s.ctx.lineWidth = grosor+1;
      s.ctx.beginPath();
      s.ctx.moveTo(poligonal[0][0], poligonal[0][1]);
      for (let i=1; i<poligonal.length; i++) {
          s.ctx.lineTo(poligonal[i][0], poligonal[i][1]);
      }
      s.ctx.stroke();
      s.ctx.closePath();
  }
  draw_polygonal(poligonal,color,width) {
      let s = this;
      s.ctx.strokeStyle = color;
      s.ctx.lineWidth = width;
      s.ctx.fillStyle = color;
      s.ctx.beginPath();
      s.ctx.moveTo(poligonal[0][0], poligonal[0][1]);
      for(let i=1; i<poligonal.length; i++) {
          s.ctx.lineTo(poligonal[i][0], poligonal[i][1]);
      }
      s.ctx.stroke();
      s.ctx.closePath();
  }
  move_mouse(){
      // envía el movimiento del puntero
      let s = this;
      s.pointer_canvas.onmousemove = function (e) {
          let u = U.u[U.getMyIndex()];
          if(!u || !u.state[1]){return;}
          const rect = s.pointer_canvas.getBoundingClientRect();
          const nx = (e.clientX-rect.left)/s.pointer_canvas.width;
          const ny = (e.clientY-rect.top)/s.pointer_canvas.height;
          easyrtc.sendData({targetRoom:room},'pointer', { x: nx, y: ny });
      };
  }
  MOUSE_UP(xys){
      // dibuja y envía el trazo xxxup
      let s = this;
      s.pointer_canvas.onmousemove = s.pointer_canvas.ontouchmove = null;
      if (xys.length > 1) {
        if(!s.eraser_activated){
          s.draw_polygonal(xys,s.board_color,2);
          if(s.auto_smooth){
            s.drawSpline(xys,s.active_color,s.active_thickness);
          }
          else{
            s.draw_polygonal(xys,s.active_color,s.active_thickness);
          }  
        }
        else{
          s.draw_eraser_polygon(xys,s.board_color,2);
        }
      }
      else{
        if(!s.eraser_activated){
          s.draw_point(xys[0][0],xys[0][1],s.active_color,s.active_thickness);
        }  
      }
      for(let i in xys){
        xys[i][0] /= s.canvas.width;
        xys[i][1] /= s.canvas.height;
      }
      const traz = [xys,s.active_color,s.active_thickness,s.eraser_activated];
      easyrtc.sendData({targetRoom:room},'strokes', { trazo: traz });
      s.boards[s.ip].push(traz);
      s.move_mouse();
      if(s.eraser_activated){
        s.eraser.dispatchEvent(new Event('click'));
      }

  }
  MOUSE_OUT(xys,down){
      // anula todo al salir del lienzo
      let s = this;
      s.pointer_canvas.onmousemove = s.pointer_canvas.ontouchmove = null;
      let ts = [];
      if (xys.length > 1) {

        if(!s.eraser_activated){
          s.draw_polygonal(xys,s.board_color,2);
        }
        else{
          s.draw_eraser_polygon(xys,s.board_color,2);
        }
      }
      s.move_mouse();
      if(down===1){
          //s.loadBoard();
      }    
  }
  drawSpline(xys,col,gro){
    let s = this;
    let dx,dy,dd;
    let dds = [0];
    let td = 0;
    let ts = [];
    for(let i=1;i<xys.length;i++){
      dx = xys[i][0]-xys[i-1][0]; 
      dy = xys[i][1]-xys[i-1][1]; 
      dd = Math.sqrt(dx*dx + dy*dy);
      td += dd;
      dds.push(td);
    }
    for (let i in dds) {
      ts.push(dds[i]/td);
    }
    const ss = numeric.spline(ts, xys);
    const ss2 = simplify_spline(ss);
    draw_spline(ss2,col,gro);

    function draw_spline(spline, color, width) {
      var xys = spline.at(numeric.linspace(0,1,100));
      s.ctx.strokeStyle = color;
      s.ctx.lineWidth = width;
      s.ctx.beginPath();
      s.ctx.moveTo(xys[0][0], xys[0][1]);
      for (var i=1; i<xys.length; i++) {
          s.ctx.lineTo(xys[i][0], xys[i][1]);
      }
      s.ctx.stroke();
      s.ctx.closePath();
    }
    function dist2(p1, p2) {
      const dx = p1[0] - p2[0];
      const dy = p1[1] - p2[1];
      return dx * dx + dy * dy;
    }
    function simplify_spline(spold, tolerance) {
      // Simplifies the source spline by trying to find a smaller set of points
      // which fit within @tolerance.
      var tolerance2 = tolerance ? tolerance * tolerance : 10;
      var subdivide = [ 1./4, 3./8, 1./2, 5./8, 3./4 ];
      var ts = [ 0, 1 ];
      var spnew = numeric.spline(ts, spold.at(ts));
      for (var j=0; j<6; j++) {
          for (var i=ts.length-1; i>0; i--) {
              var mt;
              var mdd = 0;
              for (var k in subdivide) {
                  var t = ts[i] * subdivide[k] + ts[i-1] * (1 - subdivide[k]);
                  var po = spold.at(t);
                  var pn = spnew.at(t);
                  var dd = dist2(po, pn);
                  if (dd > mdd) {
                      mt = t;
                      mdd = dd;
                  }
              }
              if (mdd > tolerance2) {
                  ts.splice(i, 0, mt);
              }
          }
          spnew = numeric.spline(ts, spold.at(ts));
      }
      return spnew;
    }
  }
}


class Proyector{
    constructor(){
      this.frame_aux = document.getElementById('frame_aux');
      this.frame_canvas = document.getElementById('frame_canvas');
      this.fileSender = null;
      this.blobURL = '';
      this.fileInput = document.createElement('input');
      this.documents = [];
      this.document = null;
      this.i_local_document;
      this.i_last_send = -1;
      this.image_canvas = document.createElement('canvas');
      this.fileSelect = document.getElementById('show_file_input');
      this.alt = document.getElementById('alternator');
      this.send = document.getElementById('send');
      this.backward = document.getElementById('backward');
      this.forward = document.getElementById('forward');

      this.fileInput.className = 'fileInput';
      this.fileInput.type = 'file';
      this.fileInput.multiple = true;
      this.fileInput.style.display = 'none';
      this.image_canvas.setAttribute('id','image_canvas');

      this.document_div = document.createElement('div');
      this.document_div.setAttribute('id','docdiv');
      this.document_div.style.width = '100%';
      this.document_div.style.height = '100%';
      this.document_div.style.backgroundColor = colors.frame;

      this.frame_aux.appendChild(this.document_div);
      this.setHelp();
      this.lockAllControls();
      this.lockProjectorControls();
      this.move_mouse();
      this.setListeners();
      this.hiddenDocument();
    }
    setHelp(){
      let s=this;
      s.fileSelect.setAttribute('title',help.show_file);
      help_movil(s.fileSelect,help.show_file,'left');    
      s.backward.setAttribute('title',help.backward);
      help_movil(s.backward,help.backward,'left');    
      s.forward.setAttribute('title',help.forward);
      help_movil(s.forward,help.forward,'left');    
      s.send.setAttribute('title',help.send);
      help_movil(s.send,help.send,'left');
      s.alt.setAttribute('title',help.alternator);
      help_movil(s.alt,help.alternator,'left');    
    }
    setListeners(){
      let s = this;
      s.fileSelect.addEventListener('click', function (e) {

        if(s.fileInput && U.u[U.getMyIndex()].state[2]) {
          s.fileInput.click();
        }
      }, false);

      easyrtc.setPeerListener(hidden_board, 'hidden_board');
      function hidden_board(){
          s.hiddenBoard();
          window.dispatchEvent(new Event('resize'));
      }

      easyrtc.setPeerListener(hidden_document, 'hidden_document');
      function hidden_document(){
          s.hiddenDocument();
          window.dispatchEvent(new Event('resize'));
      }

      s.alt.addEventListener('click', function (e) {
        s.switchView();
        window.dispatchEvent(new Event('resize'));
      }, false);

      s.send.addEventListener('click', function (e) {
        if(s.documents[s.i_local_document]){
          s.sendFileToAll(s.i_local_document);
        }
      }, false);

      s.backward.addEventListener('click', function (e) {
        if(s.documents.length<2){return;}
        if(s.i_local_document==0){
          s.showDocument(s.documents.length-1);
        }
        else{
          s.showDocument(s.i_local_document-1);
        }
      }, false);

      s.forward.addEventListener('click', function (e) {
        if(s.documents.length<2){return;}
        if(s.i_local_document==s.documents.length-1){
          s.showDocument(0);
        }
        else{
          s.showDocument(s.i_local_document+1);
        }
      }, false);

      s.fileInput.addEventListener('change', function (e) {
          s.documents = s.fileInput.files;
          s.i_last_send = -1;
          //console.log(s.documents);
          if(s.documents.length>0){
            s.showDocument(0);
          }
      });

      easyrtc.setPeerListener(pointerMove, 'image_pointer');
      function pointerMove(easyrtcid, tipo, data, targeting) {
        const ctx_imagen = s.image_canvas.getContext('2d');
        let x = data.x;
        let y = data.y;
        x *= s.image_canvas.width;
        y *= s.image_canvas.height;
        s.image_canvas.width = s.image_canvas.width;
        //ctx_pointer.drawImage(puntero,x,y,5,5);
        ctx_imagen.beginPath();
        ctx_imagen.arc(x, y, 15, 0, 2 * Math.PI, false);
        ctx_imagen.lineWidth = 1;
        ctx_imagen.strokeStyle = 'red';
        ctx_imagen.stroke();
      }
    }
    getVideoUrl(filename){
      let name = filename.split(video_separator);
      if(name.length==2){
        return name[1];
      }
      else{
        return '';
      }
    }
    showDocument(index){
      let s = this;
      //console.log(s.documents[index].type);
      let url = s.getVideoUrl(s.documents[index].name);
      s.unlockProjectorControls();
      if(index==s.i_last_send){
        s.send.style.backgroundColor = colors.on;
      }
      else{
        s.send.style.backgroundColor = colors.off;
      }
      s.i_local_document = index;

      if(s.documents[index].type.includes('image')){
        s.imageGenerator(s.documents[index]);
      }
      else if(s.documents[index].type.includes('pdf')){
        s.pdfGenerator(s.documents[index]);
      }
      else if(s.documents[index].type.includes('text')){
        s.textGenerator(s.documents[index]);
      }
      else if(url!=''){
        V.videoGenerator(url);
      }
      else{
        s.emptyGenerator();
      }
    }
    sendFileToAll(index){
      let s = this;
      let url = s.getVideoUrl(s.documents[index].name);
      if(!s.documents[index].type.includes('pdf') &&
         !s.documents[index].type.includes('image') &&
         !s.documents[index].type.includes('text') &&
          url==''){
        return;
      }
      if(U.u.length==1){return;}
      s.document = s.documents[index];
      s.send.style.backgroundColor = colors.on;
      s.i_last_send = index;
      for(let i=0;i<U.u.length;i++){
          s.sendFile(s.document,U.u[i].id);
      }
    }
    sendFile(archivo,userid){
      let s = this;
      if(userid != easyrtc.myEasyrtcid){
        if (easyrtc.getConnectStatus(userid) === easyrtc.IS_CONNECTED) {
            s.fileSender = easyrtc_ft.buildFileSender(userid);
            console.log('enviando '+archivo.name+' a '+easyrtc.idToName(userid));
            s.fileSender([archivo], true /* assume binary */);
        }
        else {
            console.log(easyrtc.idToName(userid) + ' no está conectado');
            easyrtc.showError(easyrtc.idToName(userid) + ' no está conectado');
        }
      }
    }
    createsFileReceiver(){
      let s = this;
      easyrtc_ft.buildFileReceiver(acceptRejectCB, blobAcceptor, receiveStatusCB);
      function acceptRejectCB(otherGuy, fileNameList, wasAccepted) {
              console.log('acepto el envío');
              wasAccepted(true);
      }
      function receiveStatusCB(otherGuy, msg) {
          if(msg.reason=='success'){
            console.log('recibido');
          }
          return true;
      }
      function blobAcceptor(otherGuy, blob, filename) {
        let tipo = blob.type;
        let url = s.getVideoUrl(filename);
        if(tipo.includes('pdf')){
          s.pdfGenerator(blob);
        }
        else if(tipo.includes('image')){
          s.imageGenerator(blob);
        }
        else if(tipo.includes('text')){
          s.textGenerator(blob);
        }
        else if(url!=''){
          V.videoGenerator(url);
        }
        s.document = null;
      }
    }
    pdfGenerator(blob){
      let s = this;
      s.eraseDocument();
      s.blobURL = URL.createObjectURL(blob);
      const iframe_pdf = document.createElement('iframe');
      iframe_pdf.setAttribute('sandbox','allow-scripts allow-same-origin');
      s.document_div.appendChild(iframe_pdf);
      iframe_pdf.style.width = '100%';
      iframe_pdf.style.height = '100%';
      iframe_pdf.setAttribute('src','pdfjs/web/viewer.html?file='+s.blobURL);
      s.hiddenBoard();
    }
    pdfGenerator_old(blob){
      let s = this;
      s.eraseDocument();
      s.blobURL = URL.createObjectURL(blob);
      const iframe_pdf = document.createElement('iframe');
      //iframe_pdf.setAttribute('sandbox','');
      iframe_pdf.setAttribute('src',s.blobURL+'#view=fitH');
      s.document_div.appendChild(iframe_pdf);
      iframe_pdf.style.width = '100%';
      iframe_pdf.style.height = '100%';
      s.hiddenBoard();
    }
    textGenerator(blob){
      let s = this;
      s.eraseDocument();
      s.blobURL = URL.createObjectURL(blob);
      const iframe_text = document.createElement('iframe');
      iframe_text.setAttribute('sandbox','');
      iframe_text.style.backgroundColor='white';
      s.document_div.appendChild(iframe_text);
      iframe_text.style.width = '100%';
      iframe_text.style.height = '100%';
      iframe_text.setAttribute('src',s.blobURL);
      s.hiddenBoard();
    }
    imageGenerator(blob){
      let s = this;
      s.eraseDocument();
      s.blobURL = URL.createObjectURL(blob);
      const image = document.createElement('img');
      image.setAttribute('id','image');
      image.src = s.blobURL;
      s.document_div.appendChild(image);
      s.document_div.appendChild(s.image_canvas);
      image.onload = function(){
        DIM.resizeImage();
      }
      s.hiddenBoard();
    }
    emptyGenerator(){
      let s = this;
      s.eraseDocument();
      s.hiddenBoard();
      alert(help.bad_type);
    }
    eraseDocument(){
      let s = this;
      while (s.document_div.firstChild) {
        s.document_div.removeChild(s.document_div.lastChild);
      }
      s.cleanPointer();
      if(s.blobURL != ''){
        console.log('revoca'+s.blobURL);
        URL.revokeObjectURL(s.blobURL);
        s.blobURL='';
      }
      V.player = null;
    }
    lockProjectorControls(){
      console.log('lockProjectorControls');
      let s = this;
      s.backward.disabled = true;
      s.forward.disabled = true;
      s.send.disabled = true;
      s.backward.style.backgroundColor = colors.disabled;
      s.forward.style.backgroundColor = colors.disabled;
      s.send.style.backgroundColor = colors.disabled;
    }
    unlockProjectorControls(){
      let s = this;
      s.backward.disabled = false;
      s.forward.disabled = false;
      s.send.disabled = false;
      s.backward.style.backgroundColor = colors.enabled;
      s.forward.style.backgroundColor = colors.enabled;
      s.send.style.backgroundColor = colors.enabled;
      // debo rescatar el green de envío
      if(s.i_local_document==s.i_last_send){
        s.send.style.backgroundColor = colors.on;
      }
      else{
        s.send.style.backgroundColor = colors.off;
      }
    }
    lockAllControls(){
      let s = this;
      s.fileSelect.disabled = true;
      s.backward.disabled = true;
      s.forward.disabled = true;
      s.send.disabled = true;
      s.alt.disabled = true;
      s.fileSelect.style.backgroundColor = colors.disabled;
      s.backward.style.backgroundColor = colors.disabled;
      s.forward.style.backgroundColor = colors.disabled;
      s.send.style.backgroundColor = colors.disabled;
      s.alt.style.backgroundColor = colors.disabled;
    }
    unlockAllControls(){
      let s = this;
      s.fileSelect.disabled = false;
      s.backward.disabled = false;
      s.forward.disabled = false;
      s.send.disabled = false;
      s.alt.disabled = false;
      s.fileSelect.style.backgroundColor = colors.enabled;
      s.backward.style.backgroundColor = colors.enabled;
      s.forward.style.backgroundColor = colors.enabled;
      s.send.style.backgroundColor = colors.enabled;
      s.alt.style.backgroundColor = colors.enabled;

      if(!s.isProyectorOn()){
        s.lockProjectorControls()
      }
    }
    switchView(){
      let s = this;
      if(s.frame_aux.style.display=='none'){
        s.hiddenBoard();
        easyrtc.sendData({targetRoom:room},'hidden_board', 0);
        if(U.im_the_owner){
          s.unlockProjectorControls();
        }
      }
      else{
        s.hiddenDocument();
        easyrtc.sendData({targetRoom:room},'hidden_document', 0);
        s.lockProjectorControls();
      }
    }
    isProyectorOn(){
      let s = this;
      if(s.frame_aux.style.display=='none'){
        return false;
      }
      else{
        return true;
      }
    }
    hiddenDocument(){
      let s = this;
      s.alt.style.backgroundColor = colors.off;
      s.lockProjectorControls();
      s.frame_aux.style.display = 'none';
      s.frame_canvas.style.display = 'block';
      if(B){
        B.cleanPointer();
      }
      s.cleanPointer();
    }
    hiddenBoard(){
      let s = this;
      s.alt.style.backgroundColor = colors.on;
      s.frame_aux.style.display = 'block';
      s.frame_canvas.style.display = 'none';
      B.cleanPointer();
      s.cleanPointer();
    }
    move_mouse(){
      let s = this;
      s.image_canvas.onmousemove = function (e) {
          let u = U.u[U.getMyIndex()];
          if(!u || !u.state[2]){return;}
          const rect = s.image_canvas.getBoundingClientRect();
          const nx = (e.clientX-rect.left)/s.image_canvas.width;
          const ny = (e.clientY-rect.top)/s.image_canvas.height;
          easyrtc.sendData({targetRoom:room},'image_pointer', { x: nx, y: ny });
      };
    }
    cleanPointer(){
      let s = this;
      s.image_canvas.width = s.image_canvas.width;
    }
}


class YouTubeVideo{
  constructor(){
    this.player = null;
    let s = this;
    s.setListeners();
  }
  setListeners(){
    let s = this;
    easyrtc.setPeerListener(receiveChangeInPlayer, "player");
    function receiveChangeInPlayer(easyrtcid, type, data, targeting){
      let event= data.event;
      switch (event){
          case YT.PlayerState.PLAYING:
            s.player.seekTo(data.time, true);
            s.player.playVideo();
            break;
          case YT.PlayerState.PAUSED:
            s.player.pauseVideo();
            break;
          case YT.PlayerState.STOP:
            s.player.stopVideo();
            break;
          default:
      }
    }
  }
  onYouTubeIframeAPIReady() {
  }
  videoGenerator(url){
    let s = this;
    P.hiddenBoard();
    P.eraseDocument();

    let player_div = document.createElement('div');
    let player_div_child = document.createElement('div');
    let document_dim = DIM.getDivDimension('docdiv');
    //console.log(document_dim);
    player_div.setAttribute('id','playerdiv');
    player_div.setAttribute('display','block');
    player_div_child.setAttribute('id','playerdivchild');
    player_div.appendChild(player_div_child);
  
    P.document_div.appendChild(player_div);
    //console.log('videoGenerator');
    if(!U.im_the_owner){
      s.player = new YT.Player('playerdivchild', {
        videoId: url,
        width: document_dim[0],
        height: document_dim[0]*6./9.,
        playerVars: {
          controls: 0,
          rel: 0,
          disablekb: 1,
          enablejsapi: 1,
          fs: 0,
          //origin: 'https://youtube.com'
        },
        events: {
          'onReady': initialize_player,
          'onStateChange': onPlayerStateChange
        }
      });
    }
    else{
      s.player = new YT.Player('playerdivchild', {
        videoId: url,
        width: document_dim[0],
        height: document_dim[0]*6./9.,
        playerVars: {
          rel: 0,
          enablejsapi: 1,
          fs: 0,
          //origin: 'https://youtube.com'
        },
        events: {
          'onReady': initialize_player,
          'onStateChange': onPlayerStateChange
        }
      });
    }
    P.hiddenBoard();
  }
  onPlayerStateChange(event) {
    let s = this;
    if(U.im_the_owner){
      let t = s.player.getCurrentTime();
      easyrtc.sendData({targetRoom:room},"player", {event:event.data, time:t});
    }
  }
  initialize_player(){
    let s = this;
    // lo centra
    let player_div = document.getElementById('playerdiv');  
    if(player_div){
      let h,w;
      let left_dim = DIM.getDivDimension('left');
      let document_dim = DIM.getDivDimension('docdiv');
      let player_div_child = document.getElementById('playerdivchild');  
      w=document_dim[0];
      h=w*6./9.;
      if(h>document_dim[1]){ // centre vertical
        h = document_dim[1];
        w = document_dim[1]*9./6.;
      }
      player_div.style.width = w+'px';
      player_div.style.height = h+'px';
      player_div_child.style.width = w+'px';
      player_div_child.style.height = h+'px';

      const gap_left = (document_dim[0]-w)/2.;
      const gap_top = (document_dim[1]-h)/2.;
      player_div.style.position = 'absolute';
      player_div.style.left = gap_left+left_dim[0]+'px';
      player_div.style.top = gap_top+'px';
      // anula el ratón si no estoy al mando.
      if(!U.im_the_owner){
        player_div_child.style.pointerEvents='none';
      }
    }
  }
}
function initialize_player(){
  if(V){
    V.initialize_player();
  }  
}
function onYouTubeIframeAPIReady(){
  if(V){
    V.onYouTubeIframeAPIReady();
  }  
}

function onPlayerStateChange(event){
  if(V){
    V.onPlayerStateChange(event);
  }  
}




