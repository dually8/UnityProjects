using UnityEngine;
using System.Collections;

public class BallHealth : MonoBehaviour {

	public float maxFallDistance = -10;


	// Update is called once per frame
	void Update () 
	{
		if (transform.position.y <= maxFallDistance)
			Application.LoadLevel ("Level01");
	}
}
