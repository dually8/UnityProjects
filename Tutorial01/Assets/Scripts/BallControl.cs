using UnityEngine;
using System.Collections;

public class BallControl : MonoBehaviour
{

	public float rotationalSpeed = 100;
	public float jumpHeight = 8;

	private bool isFalling = false;
	
	// Update is called once per frame
	void Update ()
	{
		// Handle ball rotation
		float rotation = Input.GetAxis ("Horizontal") * rotationalSpeed;
		rotation *= Time.deltaTime;
		rigidbody.AddRelativeTorque (Vector3.back * rotation );

		// check for input
		if ((Input.GetKeyDown (KeyCode.W) || Input.GetKeyDown (KeyCode.Space)) && isFalling == false) 
		{
			Vector3 temp = new Vector3 (0, jumpHeight, 0);
			rigidbody.velocity += temp;
		}
		
		isFalling = true;
	}

	void OnCollisionStay()
	{
		isFalling = false;
		//Debug.Log ("false");
	}
}

