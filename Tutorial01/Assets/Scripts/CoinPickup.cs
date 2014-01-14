using UnityEngine;
using System.Collections;

public class CoinPickup : MonoBehaviour {

	public Transform coinEffect;
	
	void OnTriggerEnter (Collider info) 
	{
		//if (info.tag == "Player") 
		if(info.collider.name == "Player")
		{
			Instantiate(coinEffect, transform.position, transform.rotation);
			//Destroy(effect, 3);
			Destroy (this.gameObject); 
			// add coin counter here
			GameMaster.currentScore++;
			Debug.Log(GameMaster.currentScore);

		}
	}
}
