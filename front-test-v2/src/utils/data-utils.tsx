import axios from 'axios'
export function save(key: string,val: any) {  
	if(key === 'token')axios.defaults.headers.common['Authorization'] = `Bearer ${val}`
	var saveData
	saveData= JSON.stringify(val) 
	localStorage.setItem(key, saveData)
	return null
}

export function get(key: string) {   
	try{
		return localStorage.getItem(key)
		let getData = localStorage.getItem(key)
		let val
		// if(key === 'user') 
		// 	val = getData ? JSON.parse(getData) : null
		if(key === 'token')axios.defaults.headers.common['Authorization'] = `Bearer ${val}`

		return val
	}catch(e){
		return null
	}
}

export function format() {   
    try{
		localStorage.removeItem('key')
		localStorage.removeItem('token')
    }catch(e){
  }
}
