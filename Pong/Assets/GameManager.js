#pragma strict

static var playerScore01 : int = 0;
static var playerScore02 : int = 0;
var gameOver : AudioClip;
var gameOverAudio : AudioSource;
var theBall : GameObject;
var timer : float = 5.0;

var theSkin : GUISkin;


function Update()
{
	if(timer > 0)
	{
		timer -= Time.deltaTime;
	}
}

static function Score (wallname : String) 
{
	if(wallname == "rightWall")
	{
		playerScore01 += 1;
		Debug.Log("Player Score 01 = " + playerScore01);
	}
	else
	{
		playerScore02 += 1;
		Debug.Log("Player Score 02 = " + playerScore02);
	}
	
	
	
	//Debug.Log("Player Score 01 = " + playerScore01);
	//Debug.Log("Player Score 02 = " + playerScore02);
}


function StartGameOver()
{
		Destroy(theBall);
		//audio.PlayOneShot(gameOver);
		GUI.Box(new Rect(0,0,Screen.width, Screen.height), "GAME OVER!!");
		yield WaitForSeconds(10);
		playerScore01 = 0;
		playerScore02 = 0;
		Application.LoadLevel("mainscene");
		playerScore01 = 0;
		playerScore02 = 0;
		
		
}

function OnGUI()
{
	GUI.skin = theSkin;
	GUI.Label ( new Rect(Screen.width/2-150,20,100,100), ""+playerScore01);
	GUI.Label ( new Rect(Screen.width/2+150,20,100,100), ""+playerScore02);
	
	if(timer > 0)
		GUI.Label(new Rect(Screen.width/2, 25, 100, 100), ""+timer.ToString("0"));
	else
		GUI.Label(new Rect(Screen.width/2, 25, 100, 100), "");
	
	if ( playerScore01 == 5 || playerScore02 == 5 )
	{
		//AudioSource.PlayClipAtPoint(gameOver, transform.position);
		StartGameOver();		
	}
}