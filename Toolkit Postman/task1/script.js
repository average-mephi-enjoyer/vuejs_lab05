
window.addEventListener('load', async () => {
    let app = new PIXI.Application();
    await app.init({
        background: '#d2d7d8',
        resizeTo: window,
    });
    document.body.appendChild(app.canvas);

    let rectangle = new PIXI.Graphics();
    rectangle.rect(0, 0, 100, 100);
    rectangle.fill(0x0000ff);
    rectangle.pivot.set(50, 50);
    rectangle.x = app.screen.width / 2;
    rectangle.y = app.screen.height / 2;
    app.stage.addChild(rectangle);

    app.ticker.add(() => {
        rectangle.rotation += 0.02;
    });
    window.addEventListener('resize', () => {
        rectangle.x = app.screen.width / 2;
        rectangle.y = app.screen.height / 2;
    });
});