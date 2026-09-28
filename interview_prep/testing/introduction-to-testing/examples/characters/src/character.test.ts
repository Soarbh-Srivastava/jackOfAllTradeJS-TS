import { describe, it, expect } from 'vitest';
import { Character } from './character.js';
import { Person } from './person.js';

const firstName = 'Ada';
const lastName = 'Lovelace';
const role = 'Computer Scientist';

describe('Character', () => {
  it('should create a character with a first name, last name, and role', () => {
    const firstName = 'Ada';
    const lastName = 'Lovelace';
    const role = 'Computer Scientist';

    const character = new Character(firstName, lastName, role);
    // expect(character.firstName).toBe(firstName);
    // expect(character.lastName).toBe(lastName);
    // expect(character.role).toBe(role);

    expect(character).toEqual(
      expect.objectContaining({
        firstName,
        lastName,
        role,
      }),
    );
  });

  it('should allow you to increase the level', () => {
    const character = new Character(firstName, lastName, role);
    character.levelUp();
    expect(character.level).toBe(2);
  });

  it('should update the last modified date when leveling up', () => {
    const charather = new Character(firstName, lastName, role);
    const intialModifiedDate = charather.lastModified;

    charather.levelUp();
    expect(charather.lastModified).not.toBe(intialModifiedDate);
  });
});
