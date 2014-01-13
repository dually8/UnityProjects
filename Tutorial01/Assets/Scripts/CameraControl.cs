using UnityEngine;
using System.Collections;

public class CameraControl : MonoBehaviour {

	public Transform target;
	public float distance = -10;
	public double lift = 1.5;

	// Use this for initialization
	void Start () {
	
	}
	
	// Update is called once per frame
	void Update () 
	{
		transform.position = target.position + new Vector3 (0, (float)lift, distance );
		transform.LookAt (target);
	}
}
