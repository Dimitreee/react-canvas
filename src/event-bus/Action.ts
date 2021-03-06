import { Event } from "./Event";
import { Toolkit } from "../Toolkit";

export abstract class Action<T extends Event = Event> {
	targetEvent: string;
	id: string;

	constructor(targetEvent: string) {
		this.targetEvent = targetEvent;
		this.id = Toolkit.UID();
	}

	abstract doAction(event: T);
}
