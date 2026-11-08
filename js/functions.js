function isMeetingWithinWorkday(workStart, workEnd, meetingStart, duration) {
  const toMinutes = (time) => {
    const [hours, minutes] = time.split(':').map(Number);
    return hours * 60 + minutes;
  };

  const workStartMinutes = toMinutes(workStart);
  const workEndMinutes = toMinutes(workEnd);
  const meetingStartMinutes = toMinutes(meetingStart);
  const meetingEndMinutes = meetingStartMinutes + duration;

  return meetingStartMinutes >= workStartMinutes && meetingEndMinutes <= workEndMinutes;
}
