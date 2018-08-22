---
title: Using Spectrum node of Kaleidoscope add-on | Blender Skool Documentation
---

# Using Spectrum node

<youtube>
	XVfv3-HY5nM
</youtube>

In this video I will be showing you how to use the Spectrum node of the Kaleidoscope add-on in a Scene in Blender. The Spectrum node can be used just like any other node inside Blender.

Spectrum has 5 color outputs that can be connected to apply the Color from the Spectrum node to any other node input. The colors from the palette can also be **modified using Hue Saturation node or the MixRGB node**. This would allow you to change a color **non destructively**.The ColorRamp option of the node allows you to apply the colors from the Spectrum node to the ColorRamp specified in this option. The ramp is then **invisibly** connected and every change in the palette gets automatically reflected to the ColorRamp.

<callout type="error">
	Reroute nodes are not supported by the Spectrum node. Hence **reroute node links will be removed if used**. (But the links with other nodes are preserved)
</callout>

