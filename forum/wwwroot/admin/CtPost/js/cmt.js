function RenderCommentItem(n, t) { var i = ""; return ($("#common-userId").length && n.UserId == $("#common-userId").html() || $("#common-roles").length && $("#common-roles").html().includes("SuperAdmin")) && (i = '<div class="dropdown d-inline-block"><button type="button" class="btn-block-option" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"><i class="fa fa-fw fa-ellipsis-h"><\/i><\/button><div class="dropdown-menu"><a class="dropdown-item" href="#" onclick="OpenEditCommentForm(' + n.Id + '); return false;"><i class="far fa-edit fa-fw"><\/i> Sửa<\/a>' + ($("#common-roles").length && $("#common-roles").html().includes("SuperAdmin") ? '<a class="dropdown-item" href="#" onclick="DeleteComment(' + n.Id + '); return false;"><i class="far fa-trash-alt fa-fw"><\/i> Xóa<\/a>' : "") + "<\/div><\/div>"), '<div class="comment-item" id="comment-item-' + n.Id + '"><div class="media"><div class="media-left"><a href="/users/' + n.UserId + '"><img class="media-object avatar" src="' + t.Avatar + '"/><\/a><\/div><div class="media-body" id="comment-body-' + n.Id + '"><div class="comment-replacement" id="comment-replacement-' + n.Id + '"><div class="comment-heading text-muted"><a class="comment-author-name mr-5" href="/users/' + n.UserId + '">' + t.RealName + "<\/a>" + (t.Roles != null && t.Roles.length ? '<span class="badge-comment badge-author"><span class="comment-author-name">' + t.Roles + "<\/span><\/span>" : "") + '<span>đã bình luận <\/span><strong class="format-time" title="' + Kteam.renderDateTime(n.CreateTime) + '">vài giây trước<\/strong><\/div><div class="comment-body">' + n.Body + '<\/div><\/div><div class="comment-footer"><div class="btn-group btn-group-sm vote-comment-container" role="group"><a class="Upvote text-secondary btn btn-secondary" href="#" data-toggle="tooltip" data-placement="bottom" onclick="voteDiscuss(' + n.Id + ', \'Upvote\'); return false;" title="Bình luận này rất hữu ích"><i class="fas fa-arrow-up font-size-h5 fa-fw"><\/i><span>0<\/span><\/a><a class="Downvote text-secondary btn btn-secondary" href="#" data-toggle="tooltip" data-placement="bottom" onclick="voteDiscuss(' + n.Id + ', \'Downvote\'); return false;" title="Bình luận này không hữu ích"><i class="fas fa-arrow-down font-size-h5 fa-fw"><\/i><span>0<\/span><\/a><\/div><a class="btn btn-secondary btn-rounded btn-sm btn-noborder" href="#" onclick="OpenReplyForm(' + n.Id + '); return false;">Trả lời<\/a>' + i + '<a class="float-right report-discuss btn btn-alt-danger btn-rounded btn-sm" href="#" onclick="Kteam.createReport(' + n.Id + ', \'Discuss\'); return false;"><i class="far fa-flag fa-fw" aria-hidden="true"><\/i> Báo cáo<\/a><\/div>' + (n.TotalReply > 0 ? '<button class="btn btn-link btn-showReply padding-left-0" data-id="' + n.Id + '" data-count="' + n.TotalReply + '" data-show="-1" data-action="/Discuss/ReplyList/' + n.Id + '">Xem tất cả ' + n.TotalReply + " câu trả lời<\/button>" : "") + "<\/div><\/div><\/div>" }

function OpenReplyForm(n) { Kteam.isAuthenticated() ? (CancelEditComment(), $(".reply-form-remove").remove(), $("#comment-body-" + n).append(RenderReplyForm(n)), $("#form-reply #ContentReply").ckeditor(function() {}, { startupFocus: !0 })) : Kteam.showAuthenModal() }

function OpenReplyNameForm(n, t) {
    if (Kteam.isAuthenticated()) {
        CancelEditComment();
        $(".reply-form-remove").remove();
        $("#comment-body-" + n).append(RenderReplyForm(n));
        var i = $("#comment-replacement-" + t + " a.comment-author-name");
        $("#form-reply #ContentReply").ckeditor();
        $("#form-reply #ContentReply").val("@" + i.html() + ":&nbsp;");
        $("#form-reply #ContentReply").ckeditorGet().focus()
    } else Kteam.showAuthenModal()
}

function RenderReplyForm(n) { return '<div class="reply-form-remove comment-item"><div class="media"><div class="media-left d-none d-sm-block"><img class="media-object avatar-sm" src="' + $("#common-avatar").attr("src") + '" /><\/div><div class="media-body"><form action="/Discuss/reply" id="form-reply" method="post"><input data-val="true" data-val-number="The field ParentId must be a number." data-val-required="The ParentId field is required." id="ParentId" name="ParentId" type="hidden" value="' + n + '"><textarea class="form-control" id="ContentReply" name="ContentReply" placeholder="Thêm nhận xét công khai ..."><\/textarea><span class="field-validation-valid text-danger" data-valmsg-for="ContentReply" data-valmsg-replace="true"><\/span><div class="mt-10"><button type="submit" class="btn btn-primary btn-noborder mr-10 btn-rounded"><i class="fas fa-reply fa-fw"><\/i> Trả lời<\/button><a class="btn btn-outline-secondary btn-rounded" href="javascript:CancelReplyComment()">Hủy bỏ<\/a><\/div><\/form><\/div><\/div><\/div>' }

function RenderReplyItem(n, t) { var i = ""; return ($("#common-userId").length && n.UserId == $("#common-userId").html() || $("#common-roles").length && $("#common-roles").html().includes("SuperAdmin")) && (i = '<div class="dropdown d-inline-block"><button type="button" class="btn-block-option" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"><i class="fa fa-fw fa-ellipsis-h"><\/i><\/button><div class="dropdown-menu"><a class="dropdown-item" href="#" onclick="OpenEditCommentForm(' + n.Id + '); return false;"><i class="far fa-edit fa-fw"><\/i> Sửa<\/a>' + ($("#common-roles").length && $("#common-roles").html().includes("SuperAdmin") ? '<a class="dropdown-item" href="#" onclick="DeleteComment(' + n.Id + '); return false;"><i class="far fa-trash-alt fa-fw"><\/i> Xóa<\/a>' : "") + "<\/div><\/div>"), '<div class="comment-item reply-' + n.ParentId + '" id="comment-item-' + n.Id + '"><div class="media"><div class="media-left"><a href="/users/' + n.UserId + '"><img class="media-object avatar-sm" src="' + t.Avatar + '"/><\/a><\/div><div class="media-body" id="comment-body-' + n.Id + '"><div class="comment-replacement" id="comment-replacement-' + n.Id + '"><div class="comment-heading text-muted"><a class="comment-author-name" href="/users/' + n.UserId + '">' + t.RealName + "<\/a>&nbsp;" + (t.Roles != null && t.Roles.length ? '<span class="badge-comment badge-author"><span class="comment-author-name">' + t.Roles + "<\/span><\/span>" : "") + '<span>đã bình luận <\/span><strong class="format-time" title="' + Kteam.renderDateTime(n.CreateTime) + '">vài giây trước<\/strong><\/div><div class="comment-body">' + n.Body + '<\/div><\/div><div class="comment-footer"><div class="btn-group btn-group-sm vote-comment-container" role="group"><a class="Upvote text-secondary btn btn-secondary" href="#" data-toggle="tooltip" data-placement="bottom" onclick="voteDiscuss(' + n.Id + ', \'Upvote\'); return false;" title="Bình luận này rất hữu ích"><i class="fas fa-arrow-up font-size-h5 fa-fw"><\/i><span>0<\/span><\/a><a class="Downvote text-secondary btn btn-secondary" href="#" data-toggle="tooltip" data-placement="bottom" onclick="voteDiscuss(' + n.Id + ', \'Downvote\'); return false;" title="Bình luận này không hữu ích"><i class="fas fa-arrow-down font-size-h5 fa-fw"><\/i><span>0<\/span><\/a><\/div><a class="btn btn-secondary btn-rounded btn-sm btn-noborder" href="javascript:OpenReplyNameForm(' + n.ParentId + ", " + n.Id + ');">Trả lời<\/a>' + i + '<a class="float-right report-discuss btn btn-alt-danger btn-rounded btn-sm" href="#" onclick="Kteam.createReport(' + n.Id + ', \'Discuss\'); return false;"><i class="far fa-flag fa-fw" aria-hidden="true"><\/i> Báo cáo<\/a><\/div><\/div><\/div><\/div>' }

function OpenEditCommentForm(n) { $.ajax({ url: "/discuss/getcomment", type: "GET", data: { id: n }, success: function(t) { t.code == 1 && (CancelEditComment(), CancelReplyComment(), $("#comment-replacement-" + n).after(RenderEditCommentForm(n)), $("#comment-replacement-" + n).hide(), $("#comment-replacement-" + n).parent().children(".comment-footer:first").hide(), $("#form-edit #ContentEdit").ckeditor(), $("#form-edit #ContentEdit").val(t.comment.Body), $("#form-edit #ContentEdit").ckeditorGet().focus()) } }) }

function RenderEditCommentForm(n) { return '<form action="/discuss/EditComment" id="form-edit" method="post"><input data-val="true" data-val-number="The field Id must be a number." data-val-required="The Id field is required." id="Id" name="Id" type="hidden" value="' + n + '"><textarea class="form-control" id="ContentEdit" name="ContentEdit" placeholder="Thêm nhận xét công khai ..."><\/textarea><span class="field-validation-valid text-danger" data-valmsg-for="ContentEdit" data-valmsg-replace="true"><\/span><div class="mt-10"><button type="submit" class="btn btn-primary btn-noborder mr-10"><i class="fas fa-save fa-fw"><\/i> Lưu thay đổi<\/button><a class="btn btn-outline-secondary" href="javascript:CancelEditComment()">Hủy bỏ<\/a><\/div><\/form>' }

function DeleteComment(n) {
    var t = confirm("Bạn có chắc chắn muốn xóa bình luận này không?");
    t && $.ajax({ url: "/discuss/deletecomment", type: "POST", data: { id: n }, success: function(t) { t == !0 && $('.comment-item[id="comment-item-' + n + '"]').remove() } })
}

function CancelComment() {
    $("#form-comment span[data-valmsg-for='Body']").html("");
    $("#form-comment #Body").val("")
}

function CancelReplyComment() { $(".reply-form-remove").remove() }

function CancelEditComment() {
    $("#form-edit").remove();
    $(".comment-replacement").show();
    $(".comment-footer").show()
}

function voteDiscuss(n, t) { Kteam.isAuthenticated() ? $.ajax({ url: "/discuss/vote", type: "POST", data: { Id: n, Type: t }, success: function() {} }) : Kteam.showAuthenModal() }

function DeleteReport(n) {
    var t = confirm("Bạn có chắc chắn muốn xóa báo cáo này không?");
    t && $.ajax({ url: "/report/deletereport", type: "POST", data: { id: n }, success: function(t) { t == !0 && $('.comment-item[id="comment-item-' + n + '"]').remove() } })
}

function RenderCommentFromUri(n) { var t = ""; return ($("#common-userId").length && n.UserId == $("#common-userId").html() || $("#common-roles").length && $("#common-roles").html().includes("SuperAdmin")) && (t = '<div class="dropdown d-inline-block"><button type="button" class="btn-block-option" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"><i class="fa fa-fw fa-ellipsis-h"><\/i><\/button><div class="dropdown-menu"><a class="dropdown-item" href="#" onclick="OpenEditCommentForm(' + n.Id + '); return false;"><i class="far fa-edit fa-fw"><\/i> Sửa<\/a>' + ($("#common-roles").length && $("#common-roles").html().includes("SuperAdmin") ? '<a class="dropdown-item" href="#" onclick="DeleteComment(' + n.Id + '); return false;"><i class="far fa-trash-alt fa-fw"><\/i> Xóa<\/a>' : "") + "<\/div><\/div>"), '<div class="comment-item comment-from-uri" id="comment-item-' + n.Id + '"><div class="media"><div class="media-left"><a href="/users/' + n.UserId + '"><img class="media-object avatar" src="' + n.Avatar + '?w=100"/><\/a><\/div><div class="media-body" id="comment-body-' + n.Id + '"><div class="comment-replacement" id="comment-replacement-' + n.Id + '"><div class="comment-heading text-muted"><a class="comment-author-name mr-5" href="/users/' + n.UserId + '">' + n.FullName + "<\/a>" + (n.Roles != null && n.Roles.length ? '<span class="badge-comment badge-author"><span class="comment-author-name">' + n.Roles + "<\/span><\/span>" : "") + '<span>đã bình luận <\/span><strong class="format-time" title="' + Kteam.renderDateTime(n.CreateTime) + '">' + Kteam.renderDateTime(n.CreateTime) + '<\/strong><\/div><div class="comment-body">' + n.Body + '<\/div><\/div><div class="comment-footer"><div class="btn-group btn-group-sm vote-comment-container" role="group"><a class="Upvote text-' + (n.VoteType == 1 ? "primary" : "secondary") + ' btn btn-secondary" href="#" data-toggle="tooltip" data-placement="bottom" onclick="voteDiscuss(' + n.Id + ', \'Upvote\'); return false;" title="Bình luận này rất hữu ích"><i class="fas fa-arrow-up font-size-h5 fa-fw"><\/i><span>' + n.VoteUp + '<\/span><\/a><a class="Downvote text-' + (n.VoteType == 2 ? "primary" : "secondary") + ' btn btn-secondary" href="#" data-toggle="tooltip" data-placement="bottom" onclick="voteDiscuss(' + n.Id + ', \'Downvote\'); return false;" title="Bình luận này không hữu ích"><i class="fas fa-arrow-down font-size-h5 fa-fw"><\/i><span>' + n.VoteDown + '<\/span><\/a><\/div><a class="btn btn-secondary btn-rounded btn-sm btn-noborder" href="#" onclick="OpenReplyForm(' + n.Id + '); return false;">Trả lời<\/a>' + t + '<a class="float-right report-discuss btn btn-alt-danger btn-rounded btn-sm" href="#" onclick="Kteam.createReport(' + n.Id + ', \'Discuss\'); return false;"><i class="far fa-flag fa-fw" aria-hidden="true"><\/i> Báo cáo<\/a><\/div>' + (n.TotalReply > 0 ? '<button class="btn btn-link btn-showReply padding-left-0" data-id="' + n.Id + '" data-count="' + n.TotalReply + '" data-show="-1" data-action="/Discuss/ReplyList/' + n.Id + '">Xem tất cả ' + n.TotalReply + " câu trả lời<\/button>" : "") + "<\/div><\/div><\/div>" }

function LockUser(n) {
    var t = confirm("Bạn có chắc chắn muốn khóa tài khoản này không?");
    t && $.ajax({ url: "/Users/LockUser", type: "POST", data: { id: n }, success: function(n) { n == !0 && toastr.info("Đã khóa tài khoản!", "Thông báo") } })
}

function correctAnswer(n) {
    if (Kteam.isAuthenticated()) {
        var t = confirm("Bạn có chắc chắn xác nhận câu trả lời này là đúng?");
        t && $.ajax({ url: "/discuss/CorrectComment", type: "POST", data: { id: n }, success: function() {} })
    } else Kteam.showAuthenModal()
}
$(function() {
    var i, n, t;
    Kteam.isAuthenticated() && $("#form-comment #Body").focus(function() { $("#form-comment #Body").ckeditor(function() {}, { startupFocus: !0 }) });
    i = window.location.hash.substr(1);
    i.trim() && i.includes("comment_") && (n = i.substr(8), n.trim() && ($("#comment-item-" + n).length ? $.when(Kteam.scrollToElementDelayed("#comment-item-" + n)).done(function() {
        $("#comment-item-" + n).css("background-color", "#f2ffaa");
        $("#comment-item-" + n).css("padding", "15px");
        $("#comment-item-" + n).css("transition", "all 1s");
        setTimeout(function() { $("#comment-item-" + n).css("background-color", "#f4f4f4") }, 3e3)
    }) : $.ajax({
        url: "/discuss/GetCommentFromUri",
        type: "GET",
        data: { id: n },
        success: function(n) {
            n.code == 1 && ($("#comment-item-" + n.comment.Id).length || ($("#comment-list").prepend(RenderCommentFromUri(n.comment)), $('[data-toggle="tooltip"]').tooltip()), $.when(Kteam.scrollToElementDelayed("#comment-item-" + n.comment.Id)).done(function() {
                $("#comment-item-" + n.comment.Id).css("background-color", "#f2ffaa");
                $("#comment-item-" + n.comment.Id).css("padding", "15px");
                $("#comment-item-" + n.comment.Id).css("transition", "all 1s");
                setTimeout(function() { $("#comment-item-" + n.comment.Id).css("background-color", "#f4f4f4") }, 3e3)
            }))
        }
    })));
    t = $.connection.discussHub;
    t.client.addComment = function(n, t) { $("#DiscussTargetId").length && $("#DiscussTargetId").val() == n.DiscussTargetId && $("#DiscussTargetType").val() == n.DiscussTargetType && ($("#comment-list").prepend(RenderCommentItem(n, t)), Kteam.helper("highlightjs"), $('[data-toggle="tooltip"]').tooltip(), $("#cmt-show-more").length && $("#comment-list > .comment-item:last").remove()) };
    t.client.addReply = function(n, t) {
        if ($("#DiscussTargetId").length && $("#comment-body-" + n.ParentId).length && $("#DiscussTargetId").val() == n.DiscussTargetId && $("#DiscussTargetType").val() == n.DiscussTargetType) {
            var i = $("#comment-body-" + n.ParentId + " > .btn-showReply");
            i.length ? (i.attr("data-count", +i.attr("data-count") + 1), i.attr("data-show") != 1 && i.html("Xem tất cả " + i.attr("data-count") + " câu trả lời")) : $("#comment-body-" + n.ParentId).append('<button class="btn btn-link btn-showReply padding-left-0" data-id="' + n.ParentId + '" data-count="1" data-show="-1" data-action="/Discuss/ReplyList/' + n.ParentId + '">Xem tất cả 1 câu trả lời<\/button>');
            $("#comment-body-" + n.ParentId).append(RenderReplyItem(n, t));
            Kteam.helper("highlightjs");
            $('[data-toggle="tooltip"]').tooltip()
        }
    };
    t.client.deleteComment = function(n) {
        if (n.ParentId == null) $("#DiscussTargetId").length && $("#comment-item-" + n.Id).length && $("#DiscussTargetId").val() == n.DiscussTargetId && $("#DiscussTargetType").val() == n.DiscussTargetType && $("#comment-item-" + n.Id).remove();
        else if ($("#DiscussTargetId").length && $("#comment-item-" + n.ParentId).length && $("#DiscussTargetId").val() == n.DiscussTargetId && $("#DiscussTargetType").val() == n.DiscussTargetType) {
            var t = $("#comment-body-" + n.ParentId + " > .btn-showReply");
            t.length && (+t.attr("data-count") - 1 == 0 ? t.remove() : (t.attr("data-count", +t.attr("data-count") - 1), t.attr("data-show") != 1 && t.html("Xem tất cả " + t.attr("data-count") + " câu trả lời")));
            $("#comment-item-" + n.Id).remove()
        }
    };
    t.client.editComment = function(n) { $("#DiscussTargetId").length && $("#comment-item-" + n.Id).length && $("#DiscussTargetId").val() == n.DiscussTargetId && $("#DiscussTargetType").val() == n.DiscussTargetType && ($("#comment-replacement-" + n.Id + " > .comment-body").html(n.Body), Kteam.helper("highlightjs")) };
    t.client.voteComment = function(n, t) {
        var u, e, o;
        if ($("#DiscussTargetId").length && $("#comment-item-" + n.Id).length && $("#DiscussTargetId").val() == n.DiscussTargetId && $("#DiscussTargetType").val() == n.DiscussTargetType) {
            var r = t.type,
                i = n.Id,
                f = $("#common-userId").length && t.userId == $("#common-userId").html();
            t.code == !0 ? (u = +$("#comment-body-" + i + " > .comment-footer > .vote-comment-container > a." + r + " > span").html(), $("#comment-body-" + i + " > .comment-footer > .vote-comment-container > a." + r + " > span").html(u + 1), f && $("#comment-body-" + i + " > .comment-footer > .vote-comment-container > a." + r).removeClass("text-secondary").addClass("text-primary")) : t.code == !1 && (t.flagRemove == !0 ? (u = +$("#comment-body-" + i + " > .comment-footer > .vote-comment-container > a." + r + " > span").html(), $("#comment-body-" + i + " > .comment-footer > .vote-comment-container > a." + r + " > span").html(u - 1), f && $("#comment-body-" + i + " > .comment-footer > .vote-comment-container > a." + r).removeClass("text-primary").addClass("text-secondary")) : (e = +$("#comment-body-" + i + " > .comment-footer > .vote-comment-container > a.Upvote > span").html(), o = +$("#comment-body-" + i + " > .comment-footer > .vote-comment-container > a.Downvote > span").html(), r == "Upvote" ? (f && ($("#comment-body-" + i + " > .comment-footer > .vote-comment-container > a.Upvote").removeClass("text-secondary").addClass("text-primary"), $("#comment-body-" + i + " > .comment-footer > .vote-comment-container > a.Downvote").removeClass("text-primary").addClass("text-secondary")), $("#comment-body-" + i + " > .comment-footer > .vote-comment-container > a.Upvote > span").html(e + 1), $("#comment-body-" + i + " > .comment-footer > .vote-comment-container > a.Downvote > span").html(o - 1)) : (f && ($("#comment-body-" + i + " > .comment-footer > .vote-comment-container > a.Upvote").removeClass("text-primary").addClass("text-secondary"), $("#comment-body-" + i + " > .comment-footer > .vote-comment-container > a.Downvote").removeClass("text-secondary").addClass("text-primary")), $("#comment-body-" + i + " > .comment-footer > .vote-comment-container > a.Upvote > span").html(e - 1), $("#comment-body-" + i + " > .comment-footer > .vote-comment-container > a.Downvote > span").html(o + 1))))
        }
    };
    t.client.correctComment = function(n, t) {
        if ($("#DiscussTargetId").length && $("#comment-item-" + n.Id).length && $("#DiscussTargetId").val() == n.DiscussTargetId && $("#DiscussTargetType").val() == n.DiscussTargetType) {
            var i = n.Id;
            t.type == !0 ? $("#comment-accept-" + i).removeClass().addClass("vote-accepted-on").show() : t.type == !1 && $("#comment-accept-" + i).removeClass().addClass("vote-accepted-off")
        }
    };
    $.connection.hub.start().done(function() {})
});
var formComment = $("#form-comment");
formComment.submit(function(n) {
    n.preventDefault();
    $("#form-comment #Body").val().trim() ? $.ajax({
        url: formComment.attr("action"),
        type: formComment.attr("method"),
        data: formComment.serialize(),
        success: function(n) {
            $("#form-comment span[data-valmsg-for='Body']").html("");
            n.code == 1 ? $("#form-comment #Body").val("") : $("#form-comment span[data-valmsg-for='Body']").html(n.err)
        }
    }) : ($("#form-comment span[data-valmsg-for='Body']").html("Vui lòng nhập nội dung!"), $("#form-comment #Body").ckeditorGet().focus())
});
$("#comment-list").on("submit", "#form-reply", function(n) {
    if (n.preventDefault(), $("#form-reply #ContentReply").val().trim()) {
        var t = $("#form-reply");
        $.ajax({
            url: t.attr("action"),
            type: "POST",
            data: t.serialize(),
            success: function(n) {
                $("#form-reply span[data-valmsg-for='ContentReply']").html("");
                n.code == 1 ? $(".reply-form-remove").remove() : $("#form-reply span[data-valmsg-for='ContentReply']").html(n.err)
            }
        })
    } else $("#form-reply span[data-valmsg-for='ContentReply']").html("Vui lòng nhập nội dung!"), $("#form-reply #ContentReply").ckeditorGet().focus()
});
$("#comment-list").on("click", ".btn-showReply", function() {
    var n = $(this),
        t = n.attr("data-id");
    n.attr("data-show") != -1 ? n.attr("data-show") == 0 ? ($(".reply-" + t).show(), n.html("Ẩn tất cả câu trả lời"), n.attr("data-show", "1")) : ($(".reply-" + t).hide(), n.html("Xem tất cả " + $(this).attr("data-count") + " câu trả lời"), n.attr("data-show", "0")) : $.ajax({
        url: n.attr("data-action"),
        type: "GET",
        success: function(i) {
            $(".reply-" + t).remove();
            $("#comment-body-" + t).append(i);
            Kteam.helper("highlightjs");
            n.html("Ẩn tất cả câu trả lời");
            n.attr("data-show", "1")
        }
    })
});
$("#comment-list").on("submit", "#form-edit", function(n) {
    if (n.preventDefault(), $("#form-edit #ContentEdit").val().trim()) {
        var t = $("#form-edit");
        $.ajax({ url: t.attr("action"), type: "POST", data: t.serialize(), success: function(n) { n.code == 1 ? ($("#form-edit").remove(), $("#comment-replacement-" + n.comment.Id).show(), $("#comment-replacement-" + n.comment.Id).parent().children(".comment-footer:first").show()) : $("#form-edit span[data-valmsg-for='ContentEdit']").html(n.err) } })
    } else $("#form-edit span[data-valmsg-for='ContentEdit']").html("Vui lòng nhập nội dung!"), $("#form-edit #ContentEdit").ckeditorGet().focus()
});
$("#comment-list").on("click", "#cmt-show-more", function() {
    var n = $(this);
    $.ajax({
        url: n.attr("data-action"),
        type: "GET",
        success: function(t) {
            n.remove();
            t.trim() && ($(".comment-from-uri").remove(), $("#comment-list").append(t), Kteam.helper("highlightjs"), $('[data-toggle="tooltip"]').tooltip())
        }
    })
})