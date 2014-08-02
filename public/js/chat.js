(function($, window, undefined) {

    $.Chat = function(wc_options){
        var wc_defaults = {
            title: "RadioShack",
            url: "/",
            uploads_dir: "/uploads/",
            userInfo: {}
        };

        options = $.extend( {}, wc_defaults, wc_options );

        $.Chat.global.OriginalTitle = document.title;

        $.Chat.connect();
    };

    $.Chat.global = {};
    $.Chat.socket = null;

    $.Chat.connect = function(){

        socket = io.connect(options.url);

        socket.on("S2C_SOCKET_CREATED", function(){

            $.create_chat_interface();

            //$().

            socket.emit("C2S_GET_CONTACTS", options.userInfo.entry);

            socket.on("S2C_CONTACT_LIST", function(contactos){
                for(var i = 0; i < contactos.length; i++){
                    $.create_contacto(contactos[i]);
                }
            });
        });
    };

    $.create_chat_interface = function(){

        $("body").append('<div id="chat-interface" class="closed" />');

        $("#chat-interface").append('<div class="chat-users-list"><ul class="ul-contactos" /></div>');
        $("#chat-interface").append('<div class="chat-footer" />');

        $(".chat-footer").append('<button class="options-chat-list pull-right">Opciones</button>');
        $(".chat-footer").append('<button class="show-chat-list"><span class="status" />' + options.title + '</button>');
        $(".chat-footer").append('<button class="hide-chat-list">Ocultar Contactos</button>');

        $(".show-chat-list").on("click", function(){
            $("#chat-interface").removeClass("closed");
        });

        $(".hide-chat-list").on("click", function(){
            $("#chat-interface").addClass("closed");
        });
    };

    $.create_contacto = function(contacto){

        if(!contacto.avatar){
            contacto.avatar = "no-avatar.png";
        }

        var html = $('<li>' +
                        '<img class="chat-avatar" src="' + options.uploads_dir + 'avatars/'+ contacto.avatar +'" width="32" alt="" />' +
                        '<span class="chat-status status-off"><i class="fa fa-circle"></i></span>' +
                        '<span class="chat-user-name" data-entry="' + contacto.entry + '">' + contacto.nombres + " " + contacto.apellidos + '</span>' +
                    '</li>');

        $(".ul-contactos").append(html);
    };

    $.Chat.update_status = function(status){
        $("#chat-interface .status").removeClass("on");
        $("#chat-interface .status").removeClass("off");

        $("#chat-interface .status").addClass(status);

    };
}(jQuery, window));