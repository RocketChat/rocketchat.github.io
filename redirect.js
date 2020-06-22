// redirect people to rocket.chat/docs if they try and browse the GitHub pages version

if((location.hostname == "rocket.chat") && location.href.indexOf('?noredirect') == -1) {
	location="https://rocketchat.github.io" + location.pathname
}
