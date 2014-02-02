#pragma strict

var gameOver : AudioClip;
var gameOverAudio : AudioSource;

function OnTriggerEnter2D (hitInfo : Collider2D) 
{
	if(hitInfo.name == "Ball")
	{
		var wallName = transform.name;
		GameManager.Score(wallName);
		if(GameManager.playerScore01 == 5 || GameManager.playerScore02 == 5)
		{
			Debug.Log("play clip");
			//audio.PlayOneShot(gameOver);
			gameOverAudio.Play();
			yield WaitForSeconds(gameOver.length);
			return;
		}
		Application.LoadLevel("mainscene");
	}
}