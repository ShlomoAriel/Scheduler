export function isAdmin() {  
  return window.localStorage.getItem('currentUserRole') == '57d27d4313d468481b1fe12e'
}
export function getYoutubeId(url){
	if(!url){
		return ''
	}
	var ID = '';
	url = url.replace(/(>|<)/gi,'').split(/(vi\/|v=|\/v\/|youtu\.be\/|\/embed\/)/);
	if(url[2] !== undefined) {
		ID = url[2].split(/[^0-9a-z_\-]/i);
		ID = ID[0];
	}
	else {
		ID = url;
	}
	return ID;
}