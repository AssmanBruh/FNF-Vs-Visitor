#pragma header

uniform float intensity;

void main()
{
    vec4 color = texture2D(bitmap, openfl_TextureCoordv);

    // grayscale
    float gray = dot(color.rgb, vec3(0.299, 0.587, 0.114));
    float contrast = pow(gray, 1.5);

    vec3 redTone = vec3(contrast * 2.8, 0.05, 0.05);

    if (gray < 0.25)
    {
        redTone *= 0.2;
    }

    vec3 finalColor = mix(color.rgb, redTone, intensity);

    gl_FragColor = vec4(finalColor, color.a);
}