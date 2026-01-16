#pragma header

uniform float intensity;

uniform float blackPoint;

void main()
{
    vec4 color = flixel_texture2D(bitmap, openfl_TextureCoordv);

    float luminance = dot(color.rgb, vec3(0.299, 0.587, 0.114));

    float crushed = smoothstep(blackPoint, 1.0, luminance);

    float finalLuma = mix(luminance, crushed, intensity);

    if (luminance > 0.0)
    {
        color.rgb *= finalLuma / luminance;
    }
    else
    {
        color.rgb = vec3(0.0);
    }

    gl_FragColor = color;
}
