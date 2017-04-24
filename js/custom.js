$(document).ready(function(){
	    $('.menu-icon').click(function(e){
	        $('.main-menu').slideToggle(500);
	        $(this).toggleClass("close");
	        e.preventDefault();
	    });

	    $("a.readmore").click(function(){
	    	$(".navigation").show();
	    });

	    $(".yoga a.readmore").click(function(e){
	    	$(".yoga-pop").addClass("open");
	    	$(".facilities").children().not('h2').hide();
	    	$('.facilities').css('margin-bottom',0);
	    	e.preventDefault();
	    });

	    $(".rock a.readmore").click(function(e){
	    	$(".rock-pop").addClass("open");
	    	$(".facilities").children().not('h2').hide();
	    	$('.facilities').css('margin-bottom',0);
	    	e.preventDefault();
	    });

	    $(".crossfit a.readmore").click(function(e){
	    	$(".crossfit-pop").addClass("open");
	    	$(".facilities").children().not('h2').hide();
	    	$('.facilities').css('margin-bottom',0);
	    	e.preventDefault();
	    });

	    $(".regulargym a.readmore").click(function(e){
	    	$(".regulargym-pop").addClass("open");
	    	$(".facilities").children().not('h2').hide();
	    	$('.facilities').css('margin-bottom',0);
	    	e.preventDefault();
	    });

	    $(".close-btn").click(function(e){
	    	$(".yoga-pop").removeClass("open");
	    	$(".rock-pop").removeClass("open");
	    	$(".crossfit-pop").removeClass("open");
	    	$(".regulargym-pop").removeClass("open");
	    	$(".facilities").children().show();
	    	$('.facilities').css('margin-bottom',100);
	    	$(".navigation").hide();
	    	e.preventDefault();
	    });

	    // facility arrow
	    $(".navigation .next").click(function(){
	        if ($(".pop .popup-box:visible").next().length != 0)
	            $(".pop .popup-box:visible").next().addClass("open").prev().removeClass("open");
	        else {
	            $(".pop .popup-box:visible").removeClass("open");
	        	$(".pop .popup-box:first").addClass("open");
	        }
	        return false;
	    });

	    $(".navigation .prev").click(function(){
	        if ($(".pop .popup-box:visible").prev().length != 0)
	            $(".pop .popup-box:visible").prev().addClass("open").next().removeClass("open");
	        else {
	            $(".pop .popup-box:visible").removeClass("open");
	            $(".pop .popup-box:last").addClass("open");
	        }
	        return false;
	    });


	    // Edit
	    $(".edit").click(function(e){
	    	$(".banner-txt h1 input").removeAttr('readonly').addClass("editContent").focus();
	    	$(".banner-txt textarea").removeAttr('readonly').addClass("editContent").focus();
	    	$(".banner-txt input[type='submit']").addClass("show");

	    	$(".about input").removeAttr('readonly').addClass("editContent");
	    	$(".about textarea").removeAttr('readonly').addClass("editContent");
	    	$(".about input[type='submit']").addClass("show");

	    	$(".yoga-pop").addClass("open");
	    	$(".facilities").children().not('h2').hide();
	    	$('.facilities').css('margin-bottom',0);
	    	$(".about input").removeAttr('readonly').addClass("editContent");
	    	$(".image-box .img-border").hide();
	    	$(".image-box .img-upload").show();
	    	$(".navigation").show();
	    	$(".logout .save img").css("display","block");

	    	$(this).addClass("clicked");
	    	e.preventDefault();
	    });
	    /*-----------------*/

	    // Save
	    $('.save-btn').click(function(e){
	    	$('.editContent').removeClass("editContent");
	    	$('.save-btn').removeClass("show");
	    	$(".banner-txt h1 input").attr('readonly','readonly');
	    	$(".banner-txt textarea").attr('readonly','readonly');
	    	$(".about input").attr('readonly','readonly');
	    	$(".about textarea").attr('readonly','readonly');
	    	$(".edit").removeClass("clicked");
	    	$(".image-box .img-border").show();
	    	$(".image-box .img-upload").hide();
	    	$(".logout .save img").hide();
	    	e.preventDefault();
	    });

	    $(".logout .save img").click(function(e){
	    	$('.save-btn').click();
	    	$(this).hide();
	    	e.preventDefault();
	    });

	    // Upload File
	    $('.img-upload .upload').click(function(e){
	    	$('.img-upload .upload').not($(this)).parent().find('.upload-box').slideUp();
	    	$(this).parent().find('.upload-box').slideToggle();

	    	e.preventDefault();
	    });
	    $('.upload-box .step a').click(function(event){
	    	$(this).parent().find('input[type=file]').click();
	    	var upload_file = $(this).parent().find('input[type=file]');
	    	$(upload_file).change(function(e){
	    		var fileName = e.target.files[0].name;
	    		$(this).parent().find("input").val(fileName);
	    		e.preventDefault();
	    	});
	    	event.preventDefault();
	    });
	    /*-----------------*/
	});