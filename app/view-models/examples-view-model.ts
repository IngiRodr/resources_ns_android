export interface Example {
	title: string;
	path?: string;
	isFeatured?: boolean;
	isNew?: boolean;
	info?: string;
	image?: string;
	controls?: Array<string>;
}
export interface ExampleGroup extends Example {
	examples: Array<Example>;
}

export var exampleGroups: Array<ExampleGroup> = [
	{
		title: "example group 1",
		image: "~/images/empty.png",
		isNew: true,
		examples: [
			{ title: "example 1",
				image: "~/images/empty.png", 
				path:"~/examples/test-example/test-example",
				controls: ["button", "label", "switch"],
				isFeatured: true, 
				info: "Few sentences of example information. Few sentences of example information." },
			{ title: "example 2.1", image: "~/images/empty.png", controls: ["button", "label"] },
			{ title: "example 2.2", image: "~/images/empty.png", controls: ["button", "label", "switch"] },
			{ title: "example 2.3", image: "~/images/empty.png", controls: ["button"] },
			{ title: "example 2.4", image: "~/images/empty.png", controls: ["button"] }
		]
	},

	{
		title: "example group 2",
		image: "~/images/empty.png",
		examples: [
			{ title: "example 3", image: "~/images/empty.png", isFeatured: true, controls: ["button", "control 1", "control 2", "control 3", "control 4", "control 5", "control 6"] },
			{ title: "example 4", image: "~/images/empty.png", isFeatured: true, controls: ["button"], isNew: true}
		]
	},

	{
		title: "example group 3",
		image: "~/images/empty.png",
		examples: [
			{ title: "example 5", image: "~/images/empty.png" },
			{ title: "example 6", image: "~/images/empty.png", isFeatured: true }
		]
	},

	{
		title: "example group 4",
		image: "~/images/empty.png",
		examples: [
			{ title: "example 7", image: "~/images/empty.png" },
			{ title: "example 8", image: "~/images/empty.png" },
			{ title: "example 9", image: "~/images/empty.png" },
			{ title: "example 10", image: "~/images/empty.png", isFeatured: true }
		]
	}
];

export var featuredExamples = new Array<Example>();
// TODO: Use lodash maybe
exampleGroups.forEach((group) => {
	group.examples.forEach((ex) => {
		if (ex.isFeatured) { featuredExamples.push(ex); }
	})
})