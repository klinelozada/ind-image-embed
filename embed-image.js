jQuery(document).ready(function(t){t("body").prepend("<style>body.freeze{overflow:hidden}.lightbox{position:fixed;width:100vw;height:100vh;flex-direction:column;z-index:9;background:rgba(0,0,0,.5);align-items:center;justify-content:center;display:none}.lightbox.active{display:flex}.lightbox__wrapper{width:100%;max-width:450px;margin:0 auto;background:#fff;border-radius:8px;padding:20px}.lightbox__caption{margin-top:18px;flex-grow:0}.lightbox__image{flex-grow:1;overflow:hidden}.lightbox__image img{object-fit:contain;width:100%;height:100%}.lightbox__btn-done{font-size:12px;font-weight:600;letter-spacing:1px;text-transform:uppercase;padding:10px 35px;border-radius:3px;background-color:#ffd014;border-color:#ffd014;color:#11202a}#html-code{font-size:10px;height:100px;color:#ababab;line-height:14px;border-radius:4px}</style>"),t("body").prepend('<div class="lightbox"><div class="lightbox__wrapper"><div class="lightbox__image"><img src="https://picsum.photos/800/200"></div><div class="lightbox__caption"><h3>Embed a Photo</h3><span>Copy this code to embed this photo on your site: </span><textarea class="html-code" id="html-code"></textarea><button class="lightbox__btn-done">Done</button></div></div></div>'),t("img").mousedown(function(e){if(3===e.which){t(".lightbox").addClass("active"),t("body").addClass("freeze");var o=window.location.href,i=t(this).attr("src"),a=t("title").text(),l='<div><a rel="follow" href="'+a+'" target="_blank"><img src="'+i+'" alt="'+a+'"></a></div><div style="color:#444"><small><a style="text-decoration:none;color:#444" href="'+o+'" target="_blank">Cross Border Digital</a></small></div>';t("#html-code").val(l),t(".lightbox__image img").attr("src",i),console.log(l)}else alert("You have a strange Mouse!")}),t(document).on("click",".lightbox__btn-done",function(){t(".lightbox").removeClass("active"),t("body").removeClass("freeze")}),t(document).on("click","#html-code",function(){t(this).select()}),t(document).bind("contextmenu",function(t){return!1})});