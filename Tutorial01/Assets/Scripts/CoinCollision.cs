using UnityEngine;
using System.Collections;

public class CoinCollision : MonoBehaviour {

	public Transform player;
	public Transform coinEffect;

	void OnTriggerEnter(Collider col)
	{
		if (col.transform == player) 
		{
			Instantiate(coinEffect, transform.position, transform.rotation);
			Destroy(gameObject);
			GameMaster.currentScore++;
			Debug.Log(GameMaster.currentScore);
		}
	}
}
