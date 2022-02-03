//donde se escribe la tarea
let input = document.getElementById('tarea');
//boton para crear la tarea
let boton = document.getElementById('btnTarea');
//donde se agregara la tarea
let contenedor = document.getElementById('tareas');

boton.addEventListener('click',()=>{
	if (!input.value == '') {
		
		const framento = document.createDocumentFragment();
		
		//creacion del items
		let items = document.createElement('div');
		items.id = 'items'
		
		//texto del item
		let testo = document.createTextNode(input.value);
		items.appendChild(testo);

		//creacion del boton eliminar
		let eliminar = document.createElement('i');
		eliminar.className = 'fas fa-trash-alt';

		eliminar.onclick = ()=>{
			let confirmar = confirm('Estas seguro que quiere eliminar la tarea?');
			if(confirmar){
				items.remove();
				eliminar.remove();
			}
		}

		framento.appendChild(items);
		framento.appendChild(eliminar);
		contenedor.appendChild(framento);

	}

	input.value = '';
});
