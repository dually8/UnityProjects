using UnityEngine;
using System.Collections;

public class GameMaster : MonoBehaviour {

	public static int currentScore = 0;

	public float offsetY = 40;
	public float sizeX = 800;
	public float sizeY = 40;

	void OnGUI()
	{
		GUI.Box (new Rect (Screen.width/2 - sizeX/2,offsetY,sizeX,sizeY), "Score: " + currentScore);

	}
}
