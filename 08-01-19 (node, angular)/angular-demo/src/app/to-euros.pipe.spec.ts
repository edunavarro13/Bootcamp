import { ToEurosPipe } from './to-euros.pipe';

describe('ToEurosPipe', () => {
  it('create an instance', () => {
    const pipe = new ToEurosPipe();
    expect(pipe).toBeTruthy();
  });
});
