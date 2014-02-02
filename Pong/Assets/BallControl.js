#pragma strict

var beep : AudioClip;
var beepAudio : AudioSource;
var gameOver : AudioClip;
var gameOverAudio : AudioSource;
//var theBall : GameObject;

function Start () {
	var randomNumber = Random.Range(0,2);
	/*
	yield WaitForSeconds(1);
	Debug.Log("3");
	yield WaitForSeconds(1);
	Debug.Log("2");
	yield WaitForSeconds(1);
	Debug.Log("1");
	yield WaitForSeconds(1);
	*/
	yield WaitForSeconds(5);
	
	if(randomNumber <= 0.5)
	{
		//Debug.Log("Shoot right");
		rigidbody2D.AddForce(new Vector2(80,10));
		
	}
	else
	{
		//Debug.Log("Shoot left");
		rigidbody2D.AddForce(new Vector2(-80,-10));
	}
	
}


function OnCollisionEnter2D (colInfo : Collision2D) {
	if(  colInfo.collider.tag == "Player")
	{
		//Debug.Log("ITS WORKING");
		rigidbody2D.velocity.y = rigidbody2D.velocity.y/2 + colInfo.collider.rigidbody2D.velocity.y/3;
		audio.PlayOneShot(beep);
		
	}
	
	
	/*else if( colInfo.collider.tag == "Goal")
	{
		if(GameManager.playerScore01 == 1)
		{
			Debug.Log("Game over.");
			audio.PlayOneShot(gameOver);
			//yield WaitForSeconds(gameOver.length);
		}
		//Get ball to stop fucking moving
		//rigidbody2D.velocity.x = 0;
		//rigidbody2D.velocity.y = 0;
		//Application.LoadLevel("mainscene");
	}*/
	
}