function vote(n, t, i) { Kteam.isAuthenticated() ? $.ajax({ url: "/vote/Vote", type: "POST", data: { Id: n, Type: t, TargetType: i }, success: function() {} }) : Kteam.showAuthenModal() }
$(function() {
    var n = $.connection.voteHub;
    n.client.clientVote = function(n, t, i) {
        var r = 'div[data-toggle="vote"][data-id="' + n + '"][data-type="' + t + '"]',
            u, f, e, o, s;
        $(r).length && (u = i.type, f = $("#common-userId").length && i.userId == $("#common-userId").html(), i.code == !0 ? (e = +$(r + " > a." + u + " > div.vote-num").html(), $(r + " > a." + u + " > div.vote-num").html(e + 1), f && $(r + " > a." + u).removeClass("btn-secondary").addClass("btn-primary")) : i.code == !1 && (i.flagRemove == !0 ? (e = +$(r + " > a." + u + " > div.vote-num").html(), $(r + " > a." + u + " > div.vote-num").html(e - 1), f && $(r + " > a." + u).removeClass("btn-primary").addClass("btn-secondary")) : (o = +$(r + " > a.Upvote > div.vote-num").html(), s = +$(r + " > a.Downvote > div.vote-num").html(), u == "Upvote" ? (f && ($(r + " > a.Upvote").removeClass("btn-secondary").addClass("btn-primary"), $(r + " > a.Downvote").removeClass("btn-primary").addClass("btn-secondary")), $(r + " > a.Upvote > div.vote-num").html(o + 1), $(r + " > a.Downvote > div.vote-num").html(s - 1)) : (f && ($(r + " > a.Upvote").removeClass("btn-primary").addClass("btn-secondary"), $(r + " > a.Downvote").removeClass("btn-secondary").addClass("btn-primary")), $(r + " > a.Upvote > div.vote-num").html(o - 1), $(r + " > a.Downvote > div.vote-num").html(s + 1)))))
    };
    $.connection.hub.start().done(function() {})
})