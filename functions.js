async function dumpTracks(){

	var data = await getRecentTracks( 'sauntimo' );

	var str_html = '<ol>';

	data.recenttracks.track.forEach(function( skv_track ){

		var img_src = skv_track.image.filter(function(skv_img){
			return skv_img.size === 'small';
		})[0]['#text'];

		str_html += '<li>' 
			+ '<img src="' + img_src + '">'
			+ ' <a href="' + skv_track.url.replace( /_\/.+$/ , '' ) + '">' + skv_track.artist['#text'] + '</a>'
			+ ' - ' 
			+ '<a href="' + skv_track.url + '">' + skv_track.name + '</a></li>';
	});

	str_html += '</ol>';

	$( '.content' ).append( JSON.stringify( str_html ) );

}

async function getRecentTracks( lastfm_user ){

	return $.ajax({
		type: 'GET',
		url: 'http://ws.audioscrobbler.com/2.0/',
		data: {
			method: 'user.getRecentTracks', 
			user: lastfm_user,
			api_key: "7532ac8c9a8cf7db9bf4fe7362e73cc3",
			limit: 25,
			format: 'json',
			returnFormat: 'json'
		},
		done: function(data){
			// on success use return data here
		},
		fail: function(xhr, type, exception) { 
			// if ajax fails display error alert
			alert("ajax error response type "+type);
		}
	});
}


// const name = 'Tim Saunders';

// setTimeout( 
// 	() => alert( `Hello from ${name}` ),
// 	3000
// );
