/**
 * @author : Gianpiere Ramos Bernuy <jgianpiere@gmail.com> - jGianpiere.
 */

/**
 * cancelar solicitudes de amistad enviados.
 * init page facebook login in  ========================================
 * @see https://www.facebook.com/friends/requests/?fcref=none&outgoing=1
 * =====================================================================
 */

// exec script in console f12

var config = {
  sleep_cancel_btn : 1000,
  sleep_confir_btn : 1000,
  sleep_between_us : 2500,
  sleep_more_lst_u : 2000,
  msgconfir : function(u){
    console.log('deleted success ' + u);
  }
};

function viewMoreFriends(){
  var moreItems = setInterval(function(){
    var getMoreElements = document.getElementsByClassName('uiMorePagerPrimary');
    if(getMoreElements[0]){
        getMoreElements[0].click();
    }else{
      clearInterval(moreItems);
      deleteAllUsersList();
    }
  }, config.sleep_more_lst_u);
}

function deleteAllUsersList(){
  var inputs = document.getElementsByClassName('FriendRequestOutgoing');
  var unames = document.getElementsByClassName('');
  var cont = 0;

  var friendDeletes = setInterval(
    function(){
      inputs[cont].click();
      setTimeout(function(){
        var menu_item = document.getElementsByClassName('uiMenuItem FriendListCancel');
        menu_item[0].childNodes[0].click();
        setTimeout(function(){
          var confirmar = document.getElementsByClassName('layerConfirm uiOverlayButton');
          confirmar[0].click();
          if(cont >= inputs.length){
            // buscar mas items 
            var getMoreElements = document.getElementsByClassName('uiMorePagerPrimary');
            clearInterval(friendDeletes);
          }
          cont++;
        }, config.sleep_confir_btn);
      }, config.sleep_cancel_btn)
    }, config.sleep_between_us
  );
}

viewMoreFriends();
