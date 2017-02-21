/**
 * @author : Gianpiere Ramos Bernuy <jgianpiere@gmail.com> - jGianpiere.
 */

/**
 * Eliminar amigos de una cuenta de facebook.
 * inicie session en facebook.  ====================== ingrese a: ======
 * @see https://www.facebook.com/friends/requests/?fcref=none&outgoing=1
 * =====================================================================
 */

// hacer scroll hasta tener toda tu lista de amigos en la pantalla.
// ejecutar escript en la consola del navegador: f12 open console browsr

var config = {
  sleep_friendst_btn : 2500,
  sleep_unfriend_btn : 1000,
  msgconfir : function(u){
    console.log('deleted success ' + u);
  }
};

var cont = 0;
var unames = document.getElementsByClassName('uiProfileBlockContent');

function deleteFriend(){
	var btn_friend_status = document.getElementsByClassName('FriendRequestFriends');

	var IterFriends = setInterval(function(){
		btn_friend_status[++cont].click();
		setTimeout(function(){
			var delete_btn = document.getElementsByClassName('uiMenuItem FriendListUnfriend')[0].childNodes[0];
			delete_btn.click();
			config.msgconfir(unames[cont]);
			if(cont >= btn_friend_status.length){
				scrollFriendSearch();
			}
		}, config.sleep_unfriend_btn);
	}, config.sleep_friendst_btn);
}

function scrollFriendSearch(){
	clearInterval(IterFriends);
}

deleteFriend();
