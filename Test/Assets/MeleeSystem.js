#pragma strict

var TheDamage : int = 50;
var Distance : float;
var MaxDistance : float = 1.5;
var TheMace : Transform;
var bam : AudioSource;
var bamAudio : AudioClip;


function Update()
{
	/*if(Input.GetButtonDown("Fire1"))
	{
		var hit : RaycastHit;
		
		TheMace.animation.Play("maceAttack");
		
		if(Physics.Raycast(transform.position, transform.TransformDirection(Vector3.forward),hit))
		{
			Distance = hit.distance;
			if(Distance < MaxDistance )
			{
				hit.transform.SendMessage("ApplyDamage",TheDamage, SendMessageOptions.DontRequireReceiver);
				Debug.Log("Hit!");
			}
			else
				Debug.Log("Miss");
			
		}
		
	}
	*/
	if(Input.GetButtonDown("Fire1"))
	{
		TheMace.animation.Play("maceAttack");
		Attack();
	}
}

function Attack()
{
	yield WaitForSeconds(2);
	var hit : RaycastHit;
	var ray = Camera.main.ScreenPointToRay(Vector3(Screen.width/2, Screen.height/2, 0));
	
	if(Physics.Raycast (ray, hit))
	{
		Distance = hit.distance;
		if(Distance < MaxDistance)
		{
			hit.transform.SendMessage("ApplyDamage", TheDamage, SendMessageOptions.DontRequireReceiver);
			bam.Play();
		}
	}
}