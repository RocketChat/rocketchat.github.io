// redirect people to rocket.chat/docs if they try and browse the GitHub pages version

if((location.hostname == "rocketchat.github.io" || location.hostname == "https://www.rocket.chat") && location.href.indexOf('?noredirect') == -1) {
	location="https://rocket.chat" + location.pathname
}
