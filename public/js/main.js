// Avoid `console` errors in browsers that lack a console.
(function() {
    $(".add-contact").on("click", function(){
        contacts_add_notification();
    });

    $(".clear-contacts").on("click", function(){
        contacts_clear_notifications();
    });

    $(".add-message").on("click", function(){
        messages_add_notification();
    });

    $(".clear-messages").on("click", function(){
        messages_clear_notifications();
    });

    $(".add-notifycation").on("click", function(){
        notify_add_notification();
    });

    $(".clear-notifycations").on("click", function(){
        notify_clear_notifications();
    });

    $(document).on("ready", function(){
        $.Chat({
            title: "RadioShack Chat",
            url: "/",
            userInfo: me
        });
    });
}());

var me = {
    entry: 1,
    nombres: "Carlos Andres",
    apellidos: "Aguinaga Nuñez",
    email: "andres.aguinaga@gmail.com",
    avatar: "charles.png"
};

// Place any jQuery/helper plugins in here.

var contacts_add_notification = function(){

    var badge = $("#menu-contactos .badge");

    var num_notifications = 0;
    if(badge.length){
        num_notifications = parseInt(badge.text());
    }else{
        $("#menu-contactos").append('<span class="badge" />')
    }

    num_notifications += 1;

    var badge = $("#menu-contactos .badge");

    badge.text(num_notifications);
};

var contacts_clear_notifications = function(){
    $("#menu-contactos .badge").remove();
};

var messages_add_notification = function(){

    var badge = $("#menu-mensajes .badge");

    var num_notifications = 0;
    if(badge.length){
        num_notifications = parseInt(badge.text());
    }else{
        $("#menu-mensajes").append('<span class="badge" />')
    }

    num_notifications += 1;

    var badge = $("#menu-mensajes .badge");

    badge.text(num_notifications);
};

var messages_clear_notifications = function(){
    $("#menu-mensajes .badge").remove();
};

var notify_add_notification = function(){

    var badge = $("#menu-notificaciones .badge");

    var num_notifications = 0;
    if(badge.length){
        num_notifications = parseInt(badge.text());
    }else{
        $("#menu-notificaciones").append('<span class="badge" />')
    }

    num_notifications += 1;

    var badge = $("#menu-notificaciones .badge");

    badge.text(num_notifications);
};

var notify_clear_notifications = function(){
    $("#menu-notificaciones .badge").remove();
};
